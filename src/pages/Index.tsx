import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Users, 
  Zap, 
  Brain, 
  FileVideo, 
  Database, 
  Target,
  Sparkles 
} from "lucide-react";
import VisualAnalytics from "@/components/VisualAnalytics";
import CustomerProfiling from "@/components/CustomerProfiling";
import CampaignGenerator from "@/components/CampaignGenerator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const PlatformOverview = () => (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center bg-gradient-hero p-8 rounded-xl text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            ANKH AI Solutions
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Personalized Marketing Platform powered by Advanced AI Analytics
          </p>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </Badge>
        </div>
      </div>

      {/* Platform Flow Diagram */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Platform Architecture
          </CardTitle>
          <CardDescription>
            Comprehensive AI-driven marketing workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
            {/* Video Server */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-primary p-4 rounded-xl text-white">
                <FileVideo className="w-8 h-8" />
              </div>
              <h3 className="font-medium">Video Analytics</h3>
              <p className="text-sm text-muted-foreground text-center">
                Upload & analyze marketing videos
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-12 h-0.5 bg-gradient-primary relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* CRM/Data */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-success p-4 rounded-xl text-white">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="font-medium">Customer Data</h3>
              <p className="text-sm text-muted-foreground text-center">
                Import & profile customer data
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-12 h-0.5 bg-gradient-primary relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* AI Engine */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-hero p-4 rounded-xl text-white animate-pulse-soft">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-medium">AI Processing</h3>
              <p className="text-sm text-muted-foreground text-center">
                Match & personalize content
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-12 h-0.5 bg-gradient-primary relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-primary rotate-45"></div>
              </div>
            </div>

            {/* Campaign Output */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-primary p-4 rounded-xl text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-medium">Campaign Launch</h3>
              <p className="text-sm text-muted-foreground text-center">
                Deploy personalized campaigns
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-lift cursor-pointer" onClick={() => setActiveTab("analytics")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
              <Play className="w-6 h-6" />
            </div>
            <CardTitle>Visual Analytics</CardTitle>
            <CardDescription>
              AI-powered video content analysis with tone detection and persona matching
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer" onClick={() => setActiveTab("profiling")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center text-white mb-4">
              <Users className="w-6 h-6" />
            </div>
            <CardTitle>Customer Profiling</CardTitle>
            <CardDescription>
              Advanced demographic and behavioral analysis for precise targeting
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer" onClick={() => setActiveTab("campaigns")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <CardTitle>Campaign Generator</CardTitle>
            <CardDescription>
              Intelligent campaign creation with personalized content recommendations
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Demo Data Section */}
      <Card className="bg-gradient-subtle border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center">Ready to Explore?</CardTitle>
          <CardDescription className="text-center">
            Use our demo data to quickly test the platform capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("analytics")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileVideo className="w-4 h-4 mr-2" />
              Try Video Analytics
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("profiling")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Users className="w-4 h-4 mr-2" />
              Try Customer Profiling
            </Button>
            <Button 
              onClick={() => setActiveTab("campaigns")}
              className="btn-primary"
            >
              <Zap className="w-4 h-4 mr-2" />
              Generate Campaign
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">ANKH AI Solutions</h1>
                <p className="text-sm text-muted-foreground">Personalized Marketing Platform</p>
              </div>
            </div>
            <Badge variant="outline" className="border-primary text-primary">
              Demo Platform
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Visual Analytics</TabsTrigger>
            <TabsTrigger value="profiling">Customer Profiling</TabsTrigger>
            <TabsTrigger value="campaigns">Campaign Generator</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <PlatformOverview />
          </TabsContent>

          <TabsContent value="analytics">
            <VisualAnalytics />
          </TabsContent>

          <TabsContent value="profiling">
            <CustomerProfiling />
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignGenerator />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;