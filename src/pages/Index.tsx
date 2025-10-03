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
import AITrainingConfiguration from "@/components/AITrainingConfiguration";

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
            ANKH AI 解決方案
          </h1>
          <p className="text-xl opacity-90 mb-6">
            先進AI驅動的個人化營銷平台
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              醫療級AI智能技術
            </Badge>
            <Badge variant="secondary" className="bg-gradient-gold text-primary-dark border-0">
              <Target className="w-4 h-4 mr-2" />
              精準營銷方案
            </Badge>
          </div>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            運用尖端人工智能技術分析影片內容，深入了解客戶特徵，
            並以醫療級精準度製作高度針對性的營銷活動。
          </p>
        </div>
      </div>

      {/* Platform Flow Diagram */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            ANKH 平台架構
          </CardTitle>
          <CardDescription>
            醫療級精準度結合AI創新營銷自動化技術
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6">
            {/* Video Analytics Module */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-gradient-medical p-6 rounded-xl text-white shadow-glow group-hover:scale-105 transition-transform">
                <FileVideo className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-primary">影片智能分析</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                AI驅動內容分析及語調檢測
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
              <h3 className="font-semibold text-primary">客戶特徵分析</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                深度客戶分析及行為模式映射
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
              <h3 className="font-semibold text-primary">AI核心引擎</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                神經網絡匹配及個人化演算法
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
              <h3 className="font-semibold text-primary">智能部署系統</h3>
              <p className="text-sm text-muted-foreground text-center max-w-32">
                精準目標營銷活動執行
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
            <CardTitle className="text-white">先進影片分析系統</CardTitle>
            <CardDescription className="text-white/80">
              醫療級AI分析配合精準客戶特徵匹配及參與度預測
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer card-medical" onClick={() => setActiveTab("profiling")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark mb-4">
              <Users className="w-6 h-6" />
            </div>
            <CardTitle className="text-white">深度客戶特徵分析</CardTitle>
            <CardDescription className="text-white/80">
              全面行為分析配合預測建模及推薦引擎系統
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover-lift cursor-pointer card-medical" onClick={() => setActiveTab("campaigns")}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-primary-dark mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <CardTitle className="text-white">智能營銷活動套裝</CardTitle>
            <CardDescription className="text-white/80">
              AI驅動營銷優化配合即時表現追蹤及適應調整
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Demo Data Section */}
      <Card className="bg-gradient-subtle border-2 border-warning/30 card-gold-accent">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-warning" />
            體驗 ANKH AI 平台
          </CardTitle>
          <CardDescription className="text-center">
            透過全面示範數據及即時分析探索我們的先進AI功能
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">AI影片分析</h4>
              <p className="text-xs text-muted-foreground">先進內容智能分析</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">客戶特徵映射</h4>
              <p className="text-xs text-muted-foreground">行為模式識別分析</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 border border-warning/20">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-sm">精準目標定位</h4>
              <p className="text-xs text-muted-foreground">優化營銷活動投遞</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("analytics")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileVideo className="w-4 h-4 mr-2" />
              示範影片分析
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("profiling")}
              className="border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Users className="w-4 h-4 mr-2" />
              示範特徵分析套裝
            </Button>
            <Button 
              onClick={() => setActiveTab("campaigns")}
              className="btn-gold"
            >
              <Zap className="w-4 h-4 mr-2" />
              啟動AI營銷活動
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
              <h1 className="text-xl font-bold text-gradient">ANKH AI 解決方案</h1>
              <p className="text-sm text-muted-foreground">個人化營銷平台</p>
            </div>
          </div>
          <Badge variant="outline" className="border-primary text-primary">
            示範平台
          </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card">
            <TabsTrigger value="overview">概覽</TabsTrigger>
            <TabsTrigger value="analytics">影片分析</TabsTrigger>
            <TabsTrigger value="profiling">客戶特徵分析</TabsTrigger>
            <TabsTrigger value="campaigns">營銷活動生成器</TabsTrigger>
            <TabsTrigger value="training">AI訓練配置</TabsTrigger>
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

          <TabsContent value="training">
            <AITrainingConfiguration />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;