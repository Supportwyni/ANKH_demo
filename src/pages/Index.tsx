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
import AITrainingConfiguration from "@/components/AITrainingConfiguration";
import TelesalesAIInsights from "@/components/TelesalesAIInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("analytics");


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
          <TabsList className="grid w-full grid-cols-3 bg-card">
            <TabsTrigger value="analytics">影片分析</TabsTrigger>
            <TabsTrigger value="training">AI訓練配置</TabsTrigger>
            <TabsTrigger value="telesales">電話銷售AI</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics">
            <VisualAnalytics />
          </TabsContent>

          <TabsContent value="training">
            <AITrainingConfiguration />
          </TabsContent>

          <TabsContent value="telesales">
            <TelesalesAIInsights />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;