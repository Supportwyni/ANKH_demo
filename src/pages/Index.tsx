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
      <div className="text-center bg-gradient-medical p-8 rounded-xl text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            ANKH AI Solutions
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Advanced AI-Powered Personalized Marketing Platform
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Medical-Grade AI Intelligence
            </Badge>
            <Badge variant="secondary" className="bg-gradient-gold text-primary-dark border-0">
              <Target className="w-4 h-4 mr-2" />
              Precision Marketing
            </Badge>
          </div>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            Leverage cutting-edge artificial intelligence to analyze video content, understand customer personas, 
            and generate highly targeted marketing campaigns with medical-grade precision.
          </p>
        </div>
      </div>

      {/* Platform Flow Diagram */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            ANKH Platform Architecture
          </CardTitle>
          <CardDescription>
            Medical-grade precision meets AI innovation in marketing automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6">
            {/* Video Analytics Module */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-gradient-medical p-6 rounded-xl text-white shadow-glow group-hover:scale-105 transition-transform">
                <FileVideo className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-primary">Video Intelligence</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                AI-powered content analysis & tone detection
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-16 h-0.5 bg-gradient-gold relative">
                <div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-gradient-gold rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Customer Profiling */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-gradient-success p-6 rounded-xl text-white shadow-success group-hover:scale-105 transition-transform">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-primary">Persona Profiling</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                Deep customer analysis & behavioral mapping
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-16 h-0.5 bg-gradient-gold relative">
                <div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-gradient-gold rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* AI Processing Core */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-gradient-primary p-6 rounded-xl text-white animate-pulse-soft shadow-glow group-hover:scale-105 transition-transform">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-primary">AI Core Engine</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                Neural matching & personalization algorithms
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:rotate-0 rotate-90">
              <div className="w-16 h-0.5 bg-gradient-gold relative">
                <div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-gradient-gold rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Campaign Deployment */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-gradient-hero p-6 rounded-xl text-white shadow-elegant group-hover:scale-105 transition-transform">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-primary">Smart Deployment</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                Precision-targeted campaign execution
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-lift cursor-pointer card-medical" onClick={() => setActiveTab("analytics")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark mb-4">
              <Play className="w-6 h-6" />
            </div>
            <CardTitle className="text-white">Advanced Video Analytics</CardTitle>
            <CardDescription className="text-white/80">
              Medical-grade AI analysis with precision persona matching and engagement prediction
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer card-medical" onClick={() => setActiveTab("profiling")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark mb-4">
              <Users className="w-6 h-6" />
            </div>
            <CardTitle className="text-white">Deep Customer Profiling</CardTitle>
            <CardDescription className="text-white/80">
              Comprehensive behavioral analysis with predictive modeling and recommendation engine
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer card-medical" onClick={() => setActiveTab("campaigns")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <CardTitle className="text-white">Intelligent Campaign Suite</CardTitle>
            <CardDescription className="text-white/80">
              AI-driven campaign optimization with real-time performance tracking and adaptation
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Demo Data Section */}
      <Card className="bg-gradient-subtle border-2 border-warning/30 card-gold-accent">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-warning" />
            Experience ANKH AI Platform
          </CardTitle>
          <CardDescription className="text-center">
            Explore our advanced AI capabilities with comprehensive demo data and real-time analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">AI Video Analysis</h4>
              <p className="text-xs text-muted-foreground">Advanced content intelligence</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">Persona Mapping</h4>
              <p className="text-xs text-muted-foreground">Behavioral pattern recognition</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">Precision Targeting</h4>
              <p className="text-xs text-muted-foreground">Optimized campaign delivery</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("analytics")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileVideo className="w-4 h-4 mr-2" />
              Demo Video Analytics
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("profiling")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Users className="w-4 h-4 mr-2" />
              Demo Profiling Suite
            </Button>
            <Button 
              onClick={() => setActiveTab("campaigns")}
              className="btn-gold"
            >
              <Zap className="w-4 h-4 mr-2" />
              Launch AI Campaign
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