import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { 
  Mic, 
  FileAudio, 
  Upload, 
  Zap, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle,
  AlertTriangle,
  ThumbsUp,
  Edit3,
  Play,
  Users,
  Target,
  Brain,
  BarChart3,
  Lightbulb
} from "lucide-react";

const TelesalesAIInsights = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [uploadedAudio, setUploadedAudio] = useState<File | null>(null);
  const [currentScript, setCurrentScript] = useState("");
  const { toast } = useToast();

  // Mock data for demonstration
  const callAnalysisData = {
    overallScore: 78,
    sentiment: {
      positive: 65,
      neutral: 25,
      negative: 10
    },
    audioMetrics: {
      tone: 82,
      pacing: 74,
      clarity: 88,
      empathy: 69
    },
    transcript: [
      { 
        text: "您好，我是來自ANKH疼痛舒緩中心的顧問", 
        timestamp: "00:05", 
        score: 85, 
        type: "opening" 
      },
      { 
        text: "我了解您一直受膝關節疼痛困擾", 
        timestamp: "00:15", 
        score: 92, 
        type: "empathy" 
      },
      { 
        text: "我們的專業療程在2週內有效減輕疼痛", 
        timestamp: "00:45", 
        score: 45, 
        type: "claim" 
      },
      { 
        text: "您願意預約免費諮詢嗎？", 
        timestamp: "01:20", 
        score: 88, 
        type: "closing" 
      }
    ]
  };

  const scriptSuggestions = [
    {
      category: "開場白優化",
      original: "您好，我是來自ANKH疼痛舒緩中心的顧問",
      suggested: "您好，感謝您抽空接聽。我是ANKH專業疼痛管理顧問，專門幫助像您一樣重視健康的人士",
      improvement: "增加個人化及專業性",
      score: 92
    },
    {
      category: "同理心表達",
      original: "我了解您一直受膝關節疼痛困擾",
      suggested: "我完全理解長期疼痛對日常生活的影響，這確實讓人感到困擾和沮喪",
      improvement: "更深層的情感連結",
      score: 94
    },
    {
      category: "效果說明",
      original: "我們的專業療程在2週內有效減輕疼痛",
      suggested: "根據我們過往客戶的真實反饋，大部分人在接受我們個人化療程後的2-3週內感受到顯著改善",
      improvement: "避免絕對性聲明，增加可信度",
      score: 87
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedAudio(file);
      toast({
        title: "音檔上傳成功",
        description: `已上傳 ${file.name}，準備進行AI分析`,
      });
    }
  };

  const processAudio = () => {
    if (!uploadedAudio) {
      toast({
        title: "請先上傳音檔",
        description: "請選擇要分析的通話錄音檔案",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setProcessingProgress(0);

    // Simulate processing with progress updates
    const progressInterval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsProcessing(false);
          toast({
            title: "AI分析完成",
            description: "通話分析結果已生成，請查看詳細報告",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const applyScriptSuggestions = () => {
    const improvedScript = scriptSuggestions.map(s => s.suggested).join("\n\n");
    setCurrentScript(improvedScript);
    toast({
      title: "腳本建議已應用",
      description: "AI優化建議已整合到您的銷售腳本中",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <TooltipProvider>
      <div className="space-y-6 animate-fade-in">
        {/* Header Section */}
        <Card className="card-elevated bg-gradient-medical text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-white/20 rounded-lg">
                <Mic className="w-6 h-6" />
              </div>
              電話銷售AI洞察中心
            </CardTitle>
            <CardDescription className="text-white/80 text-base">
              運用先進AI技術分析通話錄音，提供即時評分及個人化銷售腳本優化建議
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-card">
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              通話分析
            </TabsTrigger>
            <TabsTrigger value="script-tuning" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              腳本優化
            </TabsTrigger>
          </TabsList>

          {/* Call Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            {/* Upload Section */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  音檔上傳與分析
                </CardTitle>
                <CardDescription>
                  上傳通話錄音檔案進行AI智能分析
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept="audio/*"
                      onChange={handleFileUpload}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                  </div>
                  <Button 
                    onClick={processAudio} 
                    disabled={isProcessing || !uploadedAudio}
                    className="btn-primary"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        分析中...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        開始分析
                      </>
                    )}
                  </Button>
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>AI處理進度</span>
                      <span>{processingProgress}%</span>
                    </div>
                    <Progress value={processingProgress} className="w-full" />
                  </div>
                )}

                {uploadedAudio && (
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <FileAudio className="w-4 h-4 text-primary" />
                    <span className="text-sm">{uploadedAudio.name}</span>
                    <Badge variant="secondary">
                      {(uploadedAudio.size / 1024 / 1024).toFixed(1)} MB
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Analysis Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Overall Score & Metrics */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    整體評分分析
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Overall Score */}
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getScoreColor(callAnalysisData.overallScore)}`}>
                      {callAnalysisData.overallScore}
                    </div>
                    <p className="text-sm text-muted-foreground">綜合轉換潛力評分</p>
                  </div>

                  {/* Audio Metrics */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">音頻表現指標</Label>
                    {Object.entries(callAnalysisData.audioMetrics).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm capitalize">
                          {key === 'tone' ? '語調' : 
                           key === 'pacing' ? '節奏' :
                           key === 'clarity' ? '清晰度' : '同理心'}
                        </span>
                        <div className="flex items-center gap-2">
                          <Progress value={value} className="w-20" />
                          <Badge variant={getScoreBadgeVariant(value)}>
                            {value}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    情感分析結果
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(callAnalysisData.sentiment).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>
                            {key === 'positive' ? '正面情感' :
                             key === 'neutral' ? '中性情感' : '負面情感'}
                          </span>
                          <span>{value}%</span>
                        </div>
                        <Progress 
                          value={value} 
                          className={`w-full ${
                            key === 'positive' ? '[&>div]:bg-success' :
                            key === 'neutral' ? '[&>div]:bg-muted-foreground' :
                            '[&>div]:bg-destructive'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">情感洞察</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      正面情感佔主導地位，客戶接受度良好
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transcript Analysis */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileAudio className="w-5 h-5 text-accent" />
                  逐句分析與建議
                </CardTitle>
                <CardDescription>
                  AI分析每個對話片段的效果評分及改善建議
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {callAnalysisData.transcript.map((segment, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {segment.timestamp}
                            </Badge>
                            <Badge variant={getScoreBadgeVariant(segment.score)}>
                              {segment.score}/100
                            </Badge>
                            <Badge variant="secondary">
                              {segment.type === 'opening' ? '開場' :
                               segment.type === 'empathy' ? '同理心' :
                               segment.type === 'claim' ? '效果聲明' : '結尾'}
                            </Badge>
                          </div>
                          <p className="text-sm">{segment.text}</p>
                          
                          {segment.score < 70 && (
                            <div className="mt-2 p-2 bg-warning/10 rounded border border-warning/20">
                              <div className="flex items-center gap-1 text-warning text-xs">
                                <AlertTriangle className="w-3 h-3" />
                                建議優化：避免絕對性聲明，增加客戶見證
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Lightbulb className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>查看詳細改善建議</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Script Fine-Tuning Tab */}
          <TabsContent value="script-tuning" className="space-y-6">
            {/* Script Editor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit3 className="w-5 h-5 text-primary" />
                    銷售腳本編輯器
                  </CardTitle>
                  <CardDescription>
                    編輯和優化您的銷售腳本內容
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="請輸入或貼上您的銷售腳本..."
                    value={currentScript}
                    onChange={(e) => setCurrentScript(e.target.value)}
                    className="min-h-[300px] resize-none"
                  />
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={applyScriptSuggestions}
                      className="btn-primary flex-1"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      應用AI建議
                    </Button>
                    <Button variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      預覽腳本
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-accent" />
                    AI優化建議
                  </CardTitle>
                  <CardDescription>
                    基於分析結果的個人化改善建議
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[350px] overflow-y-auto">
                    {scriptSuggestions.map((suggestion, index) => (
                      <div key={index} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{suggestion.category}</Badge>
                          <Badge variant={getScoreBadgeVariant(suggestion.score)}>
                            {suggestion.score}/100
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <Label className="text-xs text-muted-foreground">原始文本</Label>
                            <p className="text-sm bg-muted/50 p-2 rounded">{suggestion.original}</p>
                          </div>
                          
                          <div>
                            <Label className="text-xs text-muted-foreground">建議優化</Label>
                            <p className="text-sm bg-success/10 p-2 rounded border border-success/20">
                              {suggestion.suggested}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <ThumbsUp className="w-3 h-3" />
                            {suggestion.improvement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Indicators */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-warning" />
                  腳本表現預測
                </CardTitle>
                <CardDescription>
                  基於歷史數據預測腳本轉換效果
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">87%</div>
                    <p className="text-xs text-muted-foreground">預期轉換率</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">4.2</div>
                    <p className="text-xs text-muted-foreground">客戶參與度</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-gold/10 rounded-lg border border-warning/20">
                    <div className="text-2xl font-bold text-warning">92</div>
                    <p className="text-xs text-muted-foreground">同理情感分數</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg border">
                    <div className="text-2xl font-bold">6.5分</div>
                    <p className="text-xs text-muted-foreground">平均通話時長</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
};

export default TelesalesAIInsights;