import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  Users, 
  Brain, 
  FileText, 
  Target, 
  TrendingUp,
  CheckCircle,
  Loader2,
  UserCheck,
  Heart,
  ShoppingCart,
  Clock
} from "lucide-react";

const CustomerProfiling = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [profileResults, setProfileResults] = useState(null);
  const [customerData, setCustomerData] = useState({
    name: "",
    age: "",
    location: "",
    interests: "",
    pastInteractions: "",
    purchaseHistory: ""
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const { toast } = useToast();

  const mockProfileResults = {
    personaType: "Active Senior Seeker",
    confidence: 92,
    demographics: {
      ageRange: "60-75",
      income: "$40,000 - $80,000",
      education: "High school to college",
      location: "Suburban and rural areas",
      lifestyle: "Active retirement, health-conscious"
    },
    preferences: {
      contentTypes: ["Educational videos (3-5 mins)", "Testimonials", "Clear demonstrations"],
      channels: ["Email", "Facebook", "Healthcare websites", "Print materials"],
      timing: "Morning hours (9-11 AM), Early evening (5-7 PM)",
      tone: "Trustworthy, empathetic, easy to understand"
    },
    behavior: {
      decisionMaking: "Cautious, seeks medical validation",
      responseToOffers: "Values safety and effectiveness over cost",
      socialInfluence: "Doctor recommendations crucial",
      brandLoyalty: "High once trust is established"
    },
    recommendations: [
      "Emphasize safety and non-invasive nature",
      "Include doctor endorsements and clinical studies",
      "Show real seniors using the technology",
      "Provide clear, step-by-step instructions",
      "Highlight mobility and independence benefits",
      "Use larger text and simple navigation"
    ]
  };

  const handleInputChange = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel')) {
      setUploadedFile(file);
      toast({
        title: "Customer data uploaded",
        description: `${file.name} ready for analysis`
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive"
      });
    }
  };

  const simulateAnalysis = async () => {
    const hasManualData = Object.values(customerData).some(value => value.trim() !== "");
    
    if (!uploadedFile && !hasManualData) {
      toast({
        title: "No customer data provided",
        description: "Please upload a CSV file or fill in the customer information",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setProfileResults(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2500));

    setProfileResults(mockProfileResults);
    setIsAnalyzing(false);
    
    toast({
      title: "Profile analysis complete!",
      description: "Customer persona has been generated successfully"
    });
  };

  const loadDemoData = () => {
    setCustomerData({
      name: "Margaret Chen",
      age: "68",
      location: "Portland, OR",
      interests: "Gardening, Walking, Community activities, Health & Wellness, Grandchildren",
      pastInteractions: "Visited pain management pages 8 times, downloaded arthritis care guide, attended virtual health seminar, contacted customer service twice",
      purchaseHistory: "Health supplements: $150/month, Medical devices: $800 annually, Physical therapy sessions: $2,400 annually"
    });
    
    toast({
      title: "Demo data loaded",
      description: "Sample pain relief customer profile ready for analysis"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Customer Profiling
          </CardTitle>
          <CardDescription>
            Upload customer data or enter information manually to generate detailed personas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Data Input Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Upload */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Upload Customer Data (CSV)</Label>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/60 transition-colors">
                <input
                  type="file"
                  accept=".csv,.xlsx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">Upload CSV file</p>
                  <p className="text-xs text-muted-foreground">
                    Include columns: name, age, preferences, interactions, etc.
                  </p>
                </label>
                {uploadedFile && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{uploadedFile.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Manual Entry */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Or Enter Customer Information</Label>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Customer name"
                      value={customerData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      placeholder="Age"
                      value={customerData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={customerData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="interests">Interests & Preferences</Label>
                  <Textarea
                    id="interests"
                    placeholder="Technology, sports, travel..."
                    value={customerData.interests}
                    onChange={(e) => handleInputChange("interests", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="interactions">Past Interactions</Label>
                  <Textarea
                    id="interactions"
                    placeholder="Email clicks, downloads, website visits..."
                    value={customerData.pastInteractions}
                    onChange={(e) => handleInputChange("pastInteractions", e.target.value)}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                onClick={loadDemoData}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                Load Demo Customer
              </Button>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="flex justify-center">
            <Button
              onClick={simulateAnalysis}
              disabled={isAnalyzing}
              className="btn-primary px-8 py-3 text-lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing Profile...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  Analyze Profile
                </>
              )}
            </Button>
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <Card className="bg-gradient-subtle">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">Processing Customer Data</div>
                    <div className="text-xs text-muted-foreground">
                      Analyzing demographics • Identifying patterns • Generating persona
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="animate-pulse-soft">
                      <Brain className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Profile Results */}
      {profileResults && (
        <div className="space-y-6">
          {/* Persona Overview */}
          <Card className="card-elevated bg-gradient-subtle border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">{profileResults.personaType}</CardTitle>
              <CardDescription>
                <Badge className="bg-success text-success-foreground">
                  {profileResults.confidence}% Confidence Match
                </Badge>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Demographics */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <Target className="w-4 h-4" />
                  </div>
                  Demographics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Age Range</Label>
                    <p className="font-medium">{profileResults.demographics.ageRange}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Income</Label>
                    <p className="font-medium">{profileResults.demographics.income}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Education</Label>
                    <p className="font-medium">{profileResults.demographics.education}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Lifestyle</Label>
                    <p className="font-medium">{profileResults.demographics.lifestyle}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Location</Label>
                  <p className="font-medium">{profileResults.demographics.location}</p>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center text-white">
                    <Heart className="w-4 h-4" />
                  </div>
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground mb-2 block">Content Types</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileResults.preferences.contentTypes.map((type, index) => (
                      <Badge key={index} variant="secondary">{type}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-2 block">Preferred Channels</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileResults.preferences.channels.map((channel, index) => (
                      <Badge key={index} variant="outline">{channel}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Best Timing</Label>
                  <p className="text-sm">{profileResults.preferences.timing}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Tone Preference</Label>
                  <p className="text-sm">{profileResults.preferences.tone}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Behavior Analysis */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center text-white">
                  <TrendingUp className="w-4 h-4" />
                </div>
                Behavioral Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">Decision Making</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.decisionMaking}</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">Offer Response</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.responseToOffers}</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">Social Influence</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.socialInfluence}</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">Brand Loyalty</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.brandLoyalty}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="card-elevated border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Recommendations
              </CardTitle>
              <CardDescription>
                Personalized marketing strategies based on the customer profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileResults.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-subtle rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CustomerProfiling;