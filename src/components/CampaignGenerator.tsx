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
    { id: "video1", name: "ANKH 疼痛緩解示範", analysis: "專業醫療語調，94% 長者匹配度" },
    { id: "video2", name: "患者成功案例", analysis: "富同理心語調，91% 康復患者匹配度" },
    { id: "demo", name: "臨床技術概覽", analysis: "教育性語調，86% 慢性疼痛匹配度" }
  ];

  const mockProfiles = [
    { id: "profile1", name: "陳婆婆 - 活躍長者", persona: "活躍長者尋求者" },
    { id: "profile2", name: "金先生 - 辦公室專業人士", persona: "忙碌辦公室疼痛專業人士" },
    { id: "demo", name: "示範疼痛緩解客戶", persona: "術後恢復患者" }
  ];

  const mockCampaignResults = {
    suitability: {
      matchScore: 94,
      recommendations: [
        "影片語調完美匹配長者觀眾偏好（富同理心、值得信賴）",
        "醫學專業演示建立重要可信度", 
        "清晰、節奏緩慢的示範適合目標年齡群組",
        "醫療保健環境營造舒適和親切感"
      ],
      improvements: [
        "添加字幕以提升可及性",
        "加入較大字體覆蓋以增強可讀性",
        "展示更多元化的長者人口統計"
      ]
    },
    textCorrections: {
      original: "試用我們令人驚豔的新疼痛緩解設備，它將改變您的生活！",
      suggested: "探索經臨床驗證、非侵入性的疼痛緩解技術，備受醫療保健專業人士信賴 - 安全有效地重獲活躍生活方式。",
      changes: [
        { type: "improvement", text: "增加臨床驗證和安全性強調" },
        { type: "improvement", text: "包含醫療保健專業人士認可" },
        { type: "improvement", text: "專注於生活方式益處和活動能力" },
        { type: "tone", text: "從誇張宣傳轉向值得信賴的醫學語言" }
      ]
    },
    campaignPreview: {
      email: {
        subject: "陳婆婆，透過經驗證的疼痛緩解重拾園藝舒適",
        preview: "加入數千名重回活躍生活方式的人士...",
        body: "親愛的陳婆婆：\n\n作為一位重視沙田區活躍生活方式的人士，您深知關節不適如何限制您喜愛的活動 - 例如照料花園。\n\n我們的FDA認證疼痛緩解技術已幫助超過15,000名像您一樣的長者回歸其最愛活動，無需依賴藥物。\n\n[觀看陳婆婆的故事：3分42秒]\n\n✓ 臨床驗證成效\n✓ 非侵入性且無藥物\n✓ 醫療保健專業人士採用\n✓ 30天滿意保證\n\n準備好無痛回歸您的花園嗎？\n\n誠摯問候，\nANKH 醫療團隊"
      },
      socialMedia: {
        platform: "Facebook",
        post: "🌱 園藝不應該痛苦！\n\n認識來自沙田的陳婆婆 - 68歲時，慢性關節疼痛阻礙她享受心愛的花園。\n\n了解她如何透過經臨床驗證的ANKH技術重回無痛園藝。\n\n👩‍⚕️ 醫療保健專業人士信賴\n🏥 FDA認證安全\n💊 無藥物疼痛緩解\n\n#疼痛緩解 #活躍樂齡 #園藝 #健康科技",
        engagement: "專為長者Facebook社群分享而優化"
      }
    },
    targeting: {
      audienceSize: "12,847 個相似檔案",
      channels: ["電子郵件", "Facebook", "醫療保健網站"],
      timing: "星期二至四，上午9-11時",
      budget: "預計觸及港幣$19,200"
    }
  };

  const generateCampaign = async () => {
    if (!selectedVideo || !selectedProfile) {
      toast({
        title: "需要選擇項目",
        description: "請選擇影片和客戶檔案",
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
      title: "營銷活動已生成！",
      description: "AI已創建個性化營銷活動"
    });
  };

  const triggerCampaign = async () => {
    setIsTriggering(true);
    
    // Simulate campaign trigger
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsTriggering(false);
    
    toast({
      title: "疼痛緩解營銷活動成功啟動！",
      description: "活動已發送給247名匹配的疼痛緩解潛在客戶"
    });
  };

  const loadDemoSelections = () => {
    setSelectedVideo("demo");
    setSelectedProfile("demo");
    
    toast({
      title: "示範選擇已載入",
      description: "準備好使用示範資料生成活動"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            個性化活動生成器
          </CardTitle>
          <CardDescription>
            結合影片分析和客戶檔案創建AI驅動的營銷活動
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Selection Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium">選擇已分析影片</Label>
              <Select value={selectedVideo} onValueChange={setSelectedVideo}>
                <SelectTrigger>
                  <SelectValue placeholder="從分析中選擇影片..." />
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
              <Label className="text-base font-medium">選擇客戶檔案</Label>
              <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                <SelectTrigger>
                  <SelectValue placeholder="選擇客戶檔案..." />
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
              載入示範選擇
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
                  正在生成活動...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  生成活動
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
                    <div className="text-sm font-medium mb-2">AI 活動生成中</div>
                    <div className="text-xs text-muted-foreground mb-4">
                      分析兼容性 • 優化內容 • 個性化訊息
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
                影片適用性分析
              </CardTitle>
              <CardDescription>
                <Badge className="bg-success text-success-foreground">
                  {campaignResults.suitability.matchScore}% 匹配度
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-success">✓ 效果良好之處</h4>
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
                  <h4 className="font-medium mb-3 text-warning">⚡ 建議改善</h4>
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
                AI強化訊息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground mb-2 block">原始內容</Label>
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-muted">
                    <p className="text-sm">{campaignResults.textCorrections.original}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-success mb-2 block">AI優化</Label>
                  <div className="p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium">{campaignResults.textCorrections.suggested}</p>
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">AI所做改善</Label>
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
                  電郵活動預覽
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">主旨</Label>
                  <p className="font-medium text-sm">{campaignResults.campaignPreview.email.subject}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">預覽文字</Label>
                  <p className="text-sm italic">{campaignResults.campaignPreview.email.preview}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">電郵內容</Label>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm whitespace-pre-line">
                    {campaignResults.campaignPreview.email.body}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>預計 68% 開啟率</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>預計 12% 點擊率</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Campaign */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Facebook 活動預覽
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground">帖文內容</Label>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm whitespace-pre-line">
                    {campaignResults.campaignPreview.socialMedia.post}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">互動策略</Label>
                  <p className="text-sm">{campaignResults.campaignPreview.socialMedia.engagement}</p>
                </div>
                <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>預計 2.3k 觀看</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>預計 180 互動</span>
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
                活動定位與啟動
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.audienceSize}</div>
                  <div className="text-xs text-muted-foreground">相似檔案</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.channels.length}</div>
                  <div className="text-xs text-muted-foreground">渠道</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.timing}</div>
                  <div className="text-xs text-muted-foreground">最佳時機</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{campaignResults.targeting.budget}</div>
                  <div className="text-xs text-muted-foreground">預計預算</div>
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
                      正在啟動活動...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      觸發活動
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