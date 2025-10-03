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
    { id: "video1", name: "ANKH Pain Relief Demo", analysis: "Professional medical tone, 94% senior match" },
    { id: "video2", name: "Patient Success Stories", analysis: "Empathetic tone, 91% recovery patient match" },
    { id: "demo", name: "Clinical Technology Overview", analysis: "Educational tone, 86% chronic pain match" }
  ];

  const mockProfiles = [
    { id: "profile1", name: "Margaret Chen - Active Senior", persona: "Active Senior Seeker" },
    { id: "profile2", name: "David Kim - Office Professional", persona: "Busy Office Professional" },
    { id: "demo", name: "Demo Pain Relief Customer", persona: "Post-Surgery Recovery Patient" }
  ];

  const mockCampaignResults = {
    suitability: {
      matchScore: 94,
      recommendations: [
        "Video tone perfectly matches senior audience preferences (empathetic, trustworthy)",
        "Medical professional presentation builds essential credibility", 
        "Clear, slow-paced demonstrations ideal for age group",
        "Healthcare setting creates comfort and familiarity"
      ],
      improvements: [
        "Add closed captions for accessibility",
        "Include larger text overlays for better readability",
        "Feature more diverse senior demographics"
      ]
    },
    textCorrections: {
      original: "Try our amazing new pain relief device that will change your life!",
      suggested: "Discover clinically-proven, non-invasive pain relief technology trusted by healthcare professionals - regain your active lifestyle safely and effectively.",
      changes: [
        { type: "improvement", text: "Added clinical validation and safety emphasis" },
        { type: "improvement", text: "Included healthcare professional endorsement" },
        { type: "improvement", text: "Focused on lifestyle benefits and mobility" },
        { type: "tone", text: "Shifted from hype to trustworthy, medical language" }
      ]
    },
    campaignPreview: {
      email: {
        subject: "Margaret, regain your gardening comfort with proven pain relief",
        preview: "Join thousands who've returned to active lifestyles...",
        body: "Dear Margaret,\n\nAs someone who values an active lifestyle in Portland, you understand how joint discomfort can limit the activities you love - like tending to your garden.\n\nOur FDA-cleared pain relief technology has helped over 15,000 seniors like you return to their favorite activities without relying on medications.\n\n[Watch Margaret's Story: 3:42]\n\n✓ Clinically proven results\n✓ Non-invasive and drug-free\n✓ Used by healthcare professionals\n✓ 30-day satisfaction guarantee\n\nReady to get back to your garden pain-free?\n\nWarm regards,\nThe ANKH Medical Team"
      },
      socialMedia: {
        platform: "Facebook",
        post: "🌱 Gardening shouldn't hurt! \n\nMeet Margaret from Portland - at 68, chronic joint pain was keeping her from her beloved garden. \n\nDiscover how she returned to pain-free gardening with clinically-proven ANKH technology.\n\n👩‍⚕️ Trusted by healthcare professionals\n🏥 FDA-cleared for safety\n💊 Drug-free pain relief\n\n#PainRelief #ActiveAging #Gardening #HealthTech",
        engagement: "Optimized for senior Facebook community sharing"
      }
    },
    targeting: {
      audienceSize: "12,847 similar profiles",
      channels: ["Email", "Facebook", "Healthcare websites"],
      timing: "Tuesday-Thursday, 9-11 AM PST",
      budget: "$2,400 estimated reach"
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
      title: "Pain relief campaign launched successfully!",
      description: "Campaign sent to 247 matching pain relief prospects"
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