import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  Video, 
  PlayCircle, 
  Brain, 
  FileText, 
  Palette, 
  Users,
  CheckCircle,
  Loader2,
  Target,
  TrendingUp,
  AlertTriangle,
  Eye,
  MousePointer,
  Share2,
  ShoppingCart
} from "lucide-react";

const VisualAnalytics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const { toast } = useToast();

  const mockAnalysisResults = {
    contentSummary: {
      keyTopics: ["Product Launch", "Brand Awareness", "Customer Testimonials"],
      mainMessages: [
        "Introducing innovative technology solutions",
        "Customer success stories and testimonials", 
        "Call-to-action for early adopters"
      ],
      duration: "2:34",
      wordCount: 287
    },
    toneAnalysis: {
      primary: "Professional",
      secondary: "Enthusiastic", 
      confidence: 92,
      emotions: [
        { name: "Confident", score: 85 },
        { name: "Inspiring", score: 78 },
        { name: "Trustworthy", score: 90 }
      ]
    },
    visualsBreakdown: {
      dominantColors: ["#2563EB", "#059669", "#F3F4F6"],
      scenes: [
        "Modern office environment",
        "Product demonstration", 
        "Customer interview setup",
        "Call-to-action screen"
      ],
      objects: ["Laptop", "Smartphone", "Office desk", "Professional attire"],
      style: "Corporate professional with modern aesthetics"
    },
    personaMatch: {
      bestFit: "Tech-savvy professionals (25-40)",
      matchScore: 87,
      alternativePersonas: [
        { name: "Young entrepreneurs", score: 73 },
        { name: "Corporate decision makers", score: 82 },
        { name: "Early tech adopters", score: 79 }
      ]
    },
    // New: Persona-Based Suitability Analysis
    personaSuitability: {
      personas: [
        {
          id: "tech-pro",
          name: "Tech-savvy Professional",
          demographics: "25-40 years, Urban, $60K-100K income",
          matchScore: 87,
          suitabilityLevel: "Excellent",
          recommendations: [
            "Perfect tone alignment - professional yet engaging",
            "Video length (2:34) matches attention span preferences",
            "Technical product focus resonates strongly",
            "Office setting creates relatability"
          ],
          improvements: [
            "Add more specific technical specifications",
            "Include ROI metrics and productivity gains",
            "Consider adding captions for mobile viewing"
          ],
          engagementPrediction: {
            viewCompletion: 78,
            clickThrough: 12,
            shareRate: 8,
            conversionRate: 4.2
          }
        },
        {
          id: "entrepreneur",
          name: "Young Entrepreneur", 
          demographics: "22-35 years, Mixed locations, Variable income",
          matchScore: 73,
          suitabilityLevel: "Good",
          recommendations: [
            "Entrepreneurial success stories create inspiration",
            "Professional tone builds credibility",
            "Product innovation angle appeals to growth mindset"
          ],
          improvements: [
            "Highlight scalability and growth potential",
            "Add more dynamic visual elements",
            "Include startup success metrics",
            "Shorten to 90 seconds for better retention"
          ],
          engagementPrediction: {
            viewCompletion: 65,
            clickThrough: 9,
            shareRate: 12,
            conversionRate: 3.1
          }
        },
        {
          id: "executive",
          name: "Corporate Executive",
          demographics: "35-55 years, Major cities, $100K+ income", 
          matchScore: 82,
          suitabilityLevel: "Very Good",
          recommendations: [
            "Executive-level messaging resonates well",
            "Professional production quality meets expectations",
            "Business case presentation style is appropriate"
          ],
          improvements: [
            "Add enterprise-level feature highlights",
            "Include compliance and security mentions",
            "Feature C-suite testimonials",
            "Add implementation timeline discussions"
          ],
          engagementPrediction: {
            viewCompletion: 85,
            clickThrough: 15,
            shareRate: 6,
            conversionRate: 5.8
          }
        },
        {
          id: "creative",
          name: "Creative Professional",
          demographics: "28-45 years, Creative hubs, $45K-80K income",
          matchScore: 61,
          suitabilityLevel: "Fair",
          recommendations: [
            "Professional quality appeals to aesthetic standards",
            "Innovation angle connects with creative mindset"
          ],
          improvements: [
            "Add more visual creativity and design elements",
            "Highlight creative workflow benefits", 
            "Include artistic/design industry use cases",
            "Use more dynamic camera work and effects",
            "Feature creative professional testimonials"
          ],
          engagementPrediction: {
            viewCompletion: 58,
            clickThrough: 7,
            shareRate: 14,
            conversionRate: 2.4
          }
        }
      ]
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      toast({
        title: "Video uploaded successfully",
        description: `${file.name} ready for analysis`
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file (MP4, MOV, etc.)",
        variant: "destructive"
      });
    }
  };

  const simulateAnalysis = async () => {
    if (!uploadedFile && !videoUrl) {
      toast({
        title: "No video selected",
        description: "Please upload a video file or enter a URL",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResults(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    setAnalysisResults(mockAnalysisResults);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis complete!",
      description: "AI has successfully analyzed your video content"
    });
  };

  const loadDemoVideo = () => {
    setVideoUrl("https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4");
    toast({
      title: "Demo video loaded",
      description: "Sample marketing video ready for analysis"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Visual Analytics
          </CardTitle>
          <CardDescription>
            Upload marketing videos for AI-powered content analysis and persona matching
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label className="text-base font-medium">Upload Video File</Label>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/60 transition-colors">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">MP4, MOV, AVI up to 50MB</p>
                </label>
                {uploadedFile && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{uploadedFile.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="video-url" className="text-base font-medium">Or Enter Video URL</Label>
              <Input
                id="video-url"
                placeholder="https://example.com/video.mp4"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              <Button
                variant="outline"
                onClick={loadDemoVideo}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Load Demo Video
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
                  Analyzing Video...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  Analyze Video
                </>
              )}
            </Button>
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <Card className="bg-gradient-subtle">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AI Processing</span>
                    <span className="text-sm text-muted-foreground">Analyzing content...</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Content extraction</span>
                    <span>Tone analysis</span>
                    <span>Visual processing</span>
                    <span>Persona matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysisResults && (
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-success" />
              Analysis Results
            </CardTitle>
            <CardDescription>
              Comprehensive AI analysis of your marketing video content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="space-y-4">
              {/* Content Summary */}
              <AccordionItem value="content" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xs">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Content Summary</div>
                      <div className="text-sm text-muted-foreground">Key topics and messages</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.contentSummary.keyTopics.map((topic, index) => (
                          <Badge key={index} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Video Details</h4>
                      <div className="space-y-1 text-sm">
                        <div>Duration: {analysisResults.contentSummary.duration}</div>
                        <div>Word Count: {analysisResults.contentSummary.wordCount}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Main Messages</h4>
                    <ul className="space-y-1">
                      {analysisResults.contentSummary.mainMessages.map((message, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {message}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Tone Analysis */}
              <AccordionItem value="tone" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center text-white">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Tone Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        {analysisResults.toneAnalysis.primary} • {analysisResults.toneAnalysis.confidence}% confidence
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Primary Tone</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{analysisResults.toneAnalysis.primary}</span>
                          <Badge variant="outline" className="text-primary border-primary">
                            {analysisResults.toneAnalysis.confidence}%
                          </Badge>
                        </div>
                        <Progress value={analysisResults.toneAnalysis.confidence} className="h-2" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Emotional Indicators</h4>
                      <div className="space-y-2">
                        {analysisResults.toneAnalysis.emotions.map((emotion, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{emotion.name}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={emotion.score} className="w-16 h-1" />
                              <span className="text-xs text-muted-foreground w-8">{emotion.score}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Visual Breakdown */}
              <AccordionItem value="visuals" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center text-white">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Visuals Breakdown</div>
                      <div className="text-sm text-muted-foreground">Colors, scenes, and style analysis</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Dominant Colors</h4>
                        <div className="flex gap-2">
                          {analysisResults.visualsBreakdown.dominantColors.map((color, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded border"
                              style={{ backgroundColor: color }}
                              title={color}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Objects</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResults.visualsBreakdown.objects.map((object, index) => (
                            <Badge key={index} variant="outline">{object}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Scene Analysis</h4>
                        <ul className="space-y-1">
                          {analysisResults.visualsBreakdown.scenes.map((scene, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {scene}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Visual Style</h4>
                        <p className="text-sm text-muted-foreground">{analysisResults.visualsBreakdown.style}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Persona Match */}
              <AccordionItem value="persona" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Persona Match</div>
                      <div className="text-sm text-muted-foreground">
                        Best fit: {analysisResults.personaMatch.bestFit} • {analysisResults.personaMatch.matchScore}% match
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div>
                    <h4 className="font-medium mb-3">Best Persona Match</h4>
                    <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{analysisResults.personaMatch.bestFit}</span>
                        <Badge className="bg-success text-success-foreground">
                          {analysisResults.personaMatch.matchScore}% Match
                        </Badge>
                      </div>
                      <Progress value={analysisResults.personaMatch.matchScore} className="h-2" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Alternative Personas</h4>
                    <div className="space-y-2">
                      {analysisResults.personaMatch.alternativePersonas.map((persona, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <span className="text-sm font-medium">{persona.name}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={persona.score} className="w-20 h-1" />
                            <span className="text-xs text-muted-foreground w-8">{persona.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Persona Suitability Analysis */}
              <AccordionItem value="suitability" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Persona Suitability Analysis</div>
                      <div className="text-sm text-muted-foreground">Video performance predictions by customer persona</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {analysisResults.personaSuitability.personas.map((persona, index) => {
                      const getSuitabilityColor = (level) => {
                        switch(level) {
                          case 'Excellent': return 'text-success border-success bg-success/5';
                          case 'Very Good': return 'text-primary border-primary bg-primary/5';
                          case 'Good': return 'text-warning border-warning bg-warning/5';
                          case 'Fair': return 'text-muted-foreground border-muted-foreground bg-muted/5';
                          default: return 'text-muted-foreground border-muted-foreground bg-muted/5';
                        }
                      };

                      return (
                        <Card key={persona.id} className={`p-4 ${getSuitabilityColor(persona.suitabilityLevel)}`}>
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{persona.name}</h4>
                                <p className="text-xs text-muted-foreground">{persona.demographics}</p>
                              </div>
                              <div className="text-right">
                                <Badge variant={persona.suitabilityLevel === 'Excellent' ? 'default' : 'secondary'}>
                                  {persona.matchScore}% Match
                                </Badge>
                                <div className="text-xs mt-1">{persona.suitabilityLevel}</div>
                              </div>
                            </div>

                            {/* Engagement Predictions */}
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{persona.engagementPrediction.viewCompletion}% completion</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MousePointer className="w-3 h-3" />
                                <span>{persona.engagementPrediction.clickThrough}% CTR</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Share2 className="w-3 h-3" />
                                <span>{persona.engagementPrediction.shareRate}% share</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ShoppingCart className="w-3 h-3" />
                                <span>{persona.engagementPrediction.conversionRate}% convert</span>
                              </div>
                            </div>

                            {/* Recommendations Preview */}
                            <div className="space-y-2">
                              <div className="text-xs font-medium text-success">✓ What Works:</div>
                              <ul className="text-xs space-y-1">
                                {persona.recommendations.slice(0, 2).map((rec, i) => (
                                  <li key={i} className="flex items-start gap-1">
                                    <CheckCircle className="w-2 h-2 text-success flex-shrink-0 mt-1" />
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="text-xs font-medium text-warning">⚡ Improvements:</div>
                              <ul className="text-xs space-y-1">
                                {persona.improvements.slice(0, 2).map((imp, i) => (
                                  <li key={i} className="flex items-start gap-1">
                                    <TrendingUp className="w-2 h-2 text-warning flex-shrink-0 mt-1" />
                                    <span>{imp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Overall Suitability Summary */}
                  <Card className="card-gold-accent p-4 bg-gradient-subtle">
                    <h4 className="font-medium mb-3">📊 Overall Suitability Summary</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {Math.round(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.matchScore, 0) / analysisResults.personaSuitability.personas.length)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Match Score</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">
                          {analysisResults.personaSuitability.personas.filter(p => p.suitabilityLevel === 'Excellent' || p.suitabilityLevel === 'Very Good').length}
                        </div>
                        <div className="text-xs text-muted-foreground">Strong Matches</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-warning">
                          {Math.round(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.engagementPrediction.viewCompletion, 0) / analysisResults.personaSuitability.personas.length)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Completion</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.engagementPrediction.conversionRate, 0) / analysisResults.personaSuitability.personas.length).toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Conversion</div>
                      </div>
                    </div>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VisualAnalytics;