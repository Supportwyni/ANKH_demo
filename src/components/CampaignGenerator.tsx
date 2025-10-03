import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Zap, 
  Target, 
  Mail, 
  Video, 
  Users, 
  TrendingUp,
  CheckCircle,
  Loader2,
  Send,
  Eye,
  ThumbsUp,
  Edit3,
  Play
} from "lucide-react";

const CampaignGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignResults, setCampaignResults] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [isTriggering, setIsTriggering] = useState(false);
  const { toast } = useToast();

  const mockVideos = [
    { id: "video1", name: "Tech Product Launch", analysis: "Professional tone, 87% persona match" },
    { id: "video2", name: "Customer Success Story", analysis: "Inspiring tone, 92% persona match" },
    { id: "demo", name: "Demo Marketing Video", analysis: "Enthusiastic tone, 85% persona match" }
  ];

  const mockProfiles = [
    { id: "profile1", name: "Sarah Johnson - Tech Professional", persona: "Tech-savvy Millennial" },
    { id: "profile2", name: "Mike Chen - Early Adopter", persona: "Innovation Enthusiast" },
    { id: "demo", name: "Demo Customer Profile", persona: "Tech-savvy Professional" }
  ];

  const mockCampaignResults = {
    suitability: {
      matchScore: 87,
      recommendations: [
        "Video length is optimal for target persona (2:34 minutes)",
        "Professional tone aligns well with customer preferences",
        "Consider adding more data points for tech-savvy audience",
        "Current pacing matches attention span expectations"
      ],
      improvements: [
        "Add captions for mobile viewing",
        "Include interactive elements in first 15 seconds",
        "Emphasize ROI metrics more prominently"
      ]
    },
    textCorrections: {
      original: "Check out our amazing new product that will revolutionize your workflow!",
      suggested: "Discover how our AI-powered solution can reduce your project completion time by 40% - join 10,000+ professionals already saving 2 hours daily.",
      changes: [
        { type: "improvement", text: "Added specific metrics (40% time reduction)" },
        { type: "improvement", text: "Included social proof (10,000+ users)" },
        { type: "improvement", text: "Quantified benefit (2 hours daily)" },
        { type: "tone", text: "Shifted from generic to data-driven language" }
      ]
    },
    campaignPreview: {
      email: {
        subject: "Sarah, reduce your project time by 40% with AI",
        preview: "See how 10,000+ professionals are saving 2 hours daily...",
        body: "Hi Sarah,\n\nAs a tech professional in San Francisco, you know that efficiency is everything. That's why I wanted to share something that could save you 2 hours every day.\n\nOur AI-powered platform has helped over 10,000 professionals like you reduce project completion time by 40%. The attached video shows exactly how it works.\n\n[Watch Video: 2:34]\n\nReady to join other San Francisco professionals who've already made the switch?\n\nBest regards,\nThe ANKH AI Team"
      },
      socialMedia: {
        platform: "LinkedIn",
        post: "🚀 Tech professionals: What if you could get back 2 hours of your day?\n\nOur latest case study with @SarahJohnson shows exactly how AI automation reduced her project time by 40%.\n\nSee the full breakdown in our new video 👇\n\n#TechProfessionals #AI #Productivity #SanFrancisco",
        engagement: "Optimized for professional network sharing"
      }
    },
    targeting: {
      audienceSize: "2,847 similar profiles",
      channels: ["Email", "LinkedIn", "Retargeting Ads"],
      timing: "Tuesday-Thursday, 6-8 PM PST",
      budget: "$1,200 estimated reach"
    }
  };

  const generateCampaign = async () => {
    if (!selectedVideo || !selectedProfile) {
      toast({
        title: "Selection required",
        description: "Please select both a video and customer profile",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setCampaignResults(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3500));

    setCampaignResults(mockCampaignResults);
    setIsGenerating(false);
    
    toast({
      title: "Campaign generated!",
      description: "AI has created a personalized marketing campaign"
    });
  };

  const triggerCampaign = async () => {
    setIsTriggering(true);
    
    // Simulate campaign trigger
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsTriggering(false);
    
    toast({
      title: "Campaign launched successfully!",
      description: "Campaign sent to 5 matching prospects"
    });
  };

  const loadDemoSelections = () => {
    setSelectedVideo("demo");
    setSelectedProfile("demo");
    
    toast({
      title: "Demo selections loaded",
      description: "Ready to generate campaign with demo data"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Personalized Campaign Generator
          </CardTitle>
          <CardDescription>
            Combine video analysis and customer profiles to create AI-powered marketing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Selection Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Select Analyzed Video</Label>
              <Select value={selectedVideo} onValueChange={setSelectedVideo}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a video from analytics..." />
                </SelectTrigger>
                <SelectContent>
                  {mockVideos.map((video) => (
                    <SelectItem key={video.id} value={video.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{video.name}</span>
                        <span className="text-xs text-muted-foreground">{video.analysis}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedVideo && (
                <div className="p-3 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">
                      {mockVideos.find(v => v.id === selectedVideo)?.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {mockVideos.find(v => v.id === selectedVideo)?.analysis}
                  </p>
                </div>
              )}
            </div>

            {/* Profile Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Select Customer Profile</Label>
              <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a customer profile..." />
                </SelectTrigger>
                <SelectContent>
                  {mockProfiles.map((profile) => (
                    <SelectItem key={profile.id} value={profile.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{profile.name}</span>
                        <span className="text-xs text-muted-foreground">{profile.persona}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedProfile && (
                <div className="p-3 bg-gradient-subtle rounded-lg border-l-4 border-success">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">
                      {mockProfiles.find(p => p.id === selectedProfile)?.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {mockProfiles.find(p => p.id === selectedProfile)?.persona}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Demo Data Button */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={loadDemoSelections}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Target className="w-4 h-4 mr-2" />
              Load Demo Selections
            </Button>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <Button
              onClick={generateCampaign}
              disabled={isGenerating || !selectedVideo || !selectedProfile}
              className="btn-primary px-8 py-3 text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Campaign...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Generate Campaign
                </>
              )}
            </Button>
          </div>

          {/* Generation Progress */}
          {isGenerating && (
            <Card className="bg-gradient-subtle">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">AI Campaign Generation</div>
                    <div className="text-xs text-muted-foreground mb-4">
                      Analyzing compatibility • Optimizing content • Personalizing messages
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="animate-pulse-soft">
                      <Zap className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Campaign Results */}
      {campaignResults && (
        <div className="space-y-6">
          {/* Suitability Analysis */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-success" />
                Video Suitability Analysis
              </CardTitle>
              <CardDescription>
                <Badge className="bg-success text-success-foreground">
                  {campaignResults.suitability.matchScore}% Match Score
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-success">✓ What's Working</h4>
                  <div className="space-y-2">
                    {campaignResults.suitability.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-warning">⚡ Suggested Improvements</h4>
                  <div className="space-y-2">
                    {campaignResults.suitability.improvements.map((imp, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Corrections */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-primary" />
                AI-Enhanced Messaging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground mb-2 block">Original</Label>
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-muted">
                    <p className="text-sm">{campaignResults.textCorrections.original}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-success mb-2 block">AI-Optimized</Label>
                  <div className="p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium">{campaignResults.textCorrections.suggested}</p>
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">AI Improvements Made</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {campaignResults.textCorrections.changes.map((change, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-gradient-subtle rounded-lg">
                      <Badge variant={change.type === 'improvement' ? 'default' : 'secondary'} className="flex-shrink-0">
                        {change.type === 'improvement' ? '↗' : '🎯'}
                      </Badge>
                      <span className="text-sm">{change.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Email Campaign */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Campaign Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Subject Line</Label>
                  <p className="font-medium text-sm">{campaignResults.campaignPreview.email.subject}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Preview Text</Label>
                  <p className="text-sm italic">{campaignResults.campaignPreview.email.preview}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Email Body</Label>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm whitespace-pre-line">
                    {campaignResults.campaignPreview.email.body}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Est. 68% open rate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Est. 12% CTR</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Campaign */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  LinkedIn Campaign Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">Post Content</Label>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm whitespace-pre-line">
                    {campaignResults.campaignPreview.socialMedia.post}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Engagement Strategy</Label>
                  <p className="text-sm">{campaignResults.campaignPreview.socialMedia.engagement}</p>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>Est. 2.3k views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Est. 180 engagements</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Targeting & Launch */}
          <Card className="card-elevated bg-gradient-subtle border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Campaign Targeting & Launch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.audienceSize}</div>
                  <div className="text-xs text-muted-foreground">Similar Profiles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.channels.length}</div>
                  <div className="text-xs text-muted-foreground">Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.timing}</div>
                  <div className="text-xs text-muted-foreground">Optimal Timing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.budget}</div>
                  <div className="text-xs text-muted-foreground">Est. Budget</div>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={triggerCampaign}
                  disabled={isTriggering}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  {isTriggering ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Launching Campaign...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Trigger Campaign
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CampaignGenerator;