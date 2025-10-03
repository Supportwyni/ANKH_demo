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
  ShoppingCart,
  ShieldCheck,
  AlertCircle,
  XCircle,
  Volume2,
  ImageIcon,
  Flag
} from "lucide-react";

const VisualAnalytics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [approvalStatus, setApprovalStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const { toast } = useToast();

  const mockAnalysisResults = {
    contentSummary: {
      keyTopics: ["痛症緩解技術", "臨床驗證", "病人見證"],
      mainMessages: [
        "介紹FDA認可的痛症緩解技術",
        "真實病人成功案例及療效", 
        "非侵入性、無藥物痛症管理方案"
      ],
      duration: "3:42",
      wordCount: 324
    },
    toneAnalysis: {
      primary: "專業醫療",
      secondary: "關懷體貼", 
      confidence: 95,
      emotions: [
        { name: "可信賴", score: 94 },
        { name: "富有同理心", score: 88 },
        { name: "權威性", score: 91 }
      ]
    },
    visualsBreakdown: {
      dominantColors: ["#1F4B3F", "#F4A261", "#FFFFFF"],
      scenes: [
        "臨床醫療環境",
        "病人在家使用設備", 
        "醫護專業人員諮詢",
        "病人活動能力改善"
      ],
      objects: ["痛症緩解設備", "醫療器材", "臨床環境", "舒適家居環境"],
      style: "醫療專業配合溫暖親切的美學設計"
    },
    personaMatch: {
      bestFit: "活躍長者尋求者 (60-75歲)",
      matchScore: 94,
      alternativePersonas: [
        { name: "術後恢復病人", score: 91 },
        { name: "慢性痛症病人", score: 86 },
        { name: "忙碌辦公室專業人士", score: 82 }
      ]
    },
    // New: Persona-Based Suitability Analysis
    personaSuitability: {
      personas: [
        {
          id: "active-senior",
          name: "活躍長者尋求者",
          demographics: "60-75歲，年收入$40K-80K，注重健康",
          matchScore: 94,
          suitabilityLevel: "極佳",
          recommendations: [
            "語調完美 - 值得信賴及富同理心的信息傳遞",
            "影片長度理想，符合注意力跨度偏好",
            "清晰示範風格建立信心",
            "專業醫療環境營造可信度"
          ],
          improvements: [
            "增加較大字體顯示以提升可見度",
            "包含醫生推薦及認可",
            "展示長者成功使用設備"
          ],
          engagementPrediction: {
            viewCompletion: 88,
            clickThrough: 15,
            shareRate: 6,
            conversionRate: 8.2
          }
        },
        {
          id: "office-professional",
          name: "忙碌辦公室專業人士", 
          demographics: "30-45歲，辦公室工作者，時間緊迫",
          matchScore: 82,
          suitabilityLevel: "非常好",
          recommendations: [
            "專業語調與目標受眾一致",
            "展示的緊湊設備適合辦公室生活方式",
            "快速緩解信息符合緊急需求"
          ],
          improvements: [
            "強調便攜性及隱私性",
            "突出時間效率優勢",
            "展示工作休息時間使用",
            "突出無線及可穿戴功能"
          ],
          engagementPrediction: {
            viewCompletion: 75,
            clickThrough: 12,
            shareRate: 8,
            conversionRate: 6.1
          }
        },
        {
          id: "recovery-patient",
          name: "術後恢復病人",
          demographics: "40-60歲，手術康復中，需要醫療驗證", 
          matchScore: 91,
          suitabilityLevel: "極佳",
          recommendations: [
            "醫療級信息建立信任",
            "臨床研究引用產生強烈共鳴",
            "專業醫療環境恰當合適"
          ],
          improvements: [
            "增加更多臨床證據及數據",
            "加入外科醫生推薦",
            "包含FDA批准提及",
            "展示術後護理整合"
          ],
          engagementPrediction: {
            viewCompletion: 92,
            clickThrough: 18,
            shareRate: 4,
            conversionRate: 9.7
          }
        },
        {
          id: "athlete",
          name: "運動創傷康復",
          demographics: "20-35歲，運動員，專注表現",
          matchScore: 73,
          suitabilityLevel: "良好",
          recommendations: [
            "創新角度吸引表現導向思維",
            "技術重點符合受眾興趣"
          ],
          improvements: [
            "增加運動醫學專業人員認可",
            "突出運動表現恢復效益", 
            "包含競技運動員見證",
            "展示更快恢復運動時間表",
            "加入運動醫學診所環境"
          ],
          engagementPrediction: {
            viewCompletion: 68,
            clickThrough: 10,
            shareRate: 12,
            conversionRate: 4.8
          }
        },
        {
          id: "chronic-pain",
          name: "慢性痛症病人",
          demographics: "45-65歲，長期病症，持懷疑態度",
          matchScore: 86,
          suitabilityLevel: "非常好",
          recommendations: [
            "同理心語調處理慢性困擾",
            "基於證據的方法建立可信度",
            "長期解決方案信息產生共鳴"
          ],
          improvements: [
            "增加更多病人成功故事",
            "包含長期研究結果",
            "加入生活方式改善見證",
            "強調無藥物替代方案效益",
            "展示日常生活整合例子"
          ],
          engagementPrediction: {
            viewCompletion: 85,
            clickThrough: 16,
            shareRate: 7,
            conversionRate: 7.4
          }
        }
      ]
    },
    // Compliance & Wording Accuracy Check
    complianceCheck: {
      overallStatus: "警告", // "通過", "警告", "不通過"
      overallScore: 78,
      visualCompliance: {
        status: "通過",
        score: 92,
        checks: [
          { item: "字體大小及清晰度", passed: true, note: "所有文字符合可讀性標準" },
          { item: "色彩對比度", passed: true, note: "符合WCAG AA標準" },
          { item: "場景專業度", passed: true, note: "醫療環境呈現專業" },
          { item: "品牌一致性", passed: true, note: "符合ANKH品牌指引" }
        ]
      },
      audioCompliance: {
        status: "通過",
        score: 88,
        checks: [
          { item: "背景音樂音量", passed: true, note: "不影響語音清晰度" },
          { item: "語速適當性", passed: true, note: "每分鐘150字，適合目標受眾" },
          { item: "發音清晰度", passed: true, note: "粵語發音標準清晰" }
        ]
      },
      wordingAccuracy: {
        status: "警告",
        score: 65,
        issues: [
          {
            type: "over-statement",
            severity: "高",
            location: "00:45 - 00:52",
            text: "完全消除膝痛，兩週見效",
            issue: "使用絕對性用語「完全消除」可能構成誇大療效",
            suggestion: "建議改為：「有效緩解膝痛症狀，臨床研究顯示兩週內可見改善」",
            regulatoryRisk: "中等 - 可能違反醫療廣告規範"
          },
          {
            type: "sensitive-wording",
            severity: "中",
            location: "01:23 - 01:30",
            text: "唯一FDA認可的痛症解決方案",
            issue: "使用「唯一」暗示排他性，可能誤導消費者",
            suggestion: "建議改為：「FDA認可的痛症緩解方案之一」",
            regulatoryRisk: "低 - 建議修正以避免爭議"
          },
          {
            type: "medical-claim",
            severity: "中",
            location: "02:15 - 02:28",
            text: "適用於所有類型慢性痛症",
            issue: "過於廣泛的醫療聲明，缺乏具體限制",
            suggestion: "建議改為：「適用於多種常見慢性痛症，包括關節炎、肌肉勞損等（請諮詢醫生）」",
            regulatoryRisk: "中等 - 需要加入免責聲明"
          }
        ],
        passedChecks: [
          { item: "避免政治敏感用語", status: "通過" },
          { item: "無歧視性語言", status: "通過" },
          { item: "無性別刻板印象", status: "通過" },
          { item: "尊重文化多樣性", status: "通過" }
        ]
      },
      fraudIndicators: {
        status: "低風險",
        score: 15,
        flags: [
          { indicator: "誇大療效", detected: true, risk: "中", note: "發現2處誇大用語" },
          { indicator: "虛假證書", detected: false, risk: "無", note: "所有認證經驗證" },
          { indicator: "誤導性價格", detected: false, risk: "無", note: "價格資訊透明" },
          { indicator: "假見證", detected: false, risk: "無", note: "病人見證已驗證" }
        ]
      },
      recommendations: [
        "修正3處用詞以符合醫療廣告規範",
        "加入適當的醫療免責聲明",
        "在片尾加入「請諮詢醫生」提示",
        "確保所有療效聲明有臨床數據支持"
      ]
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      toast({
        title: "影片上傳成功",
        description: `${file.name} 已準備好進行分析`
      });
    } else {
      toast({
        title: "檔案格式錯誤",
        description: "請上傳影片檔案 (MP4, MOV 等)",
        variant: "destructive"
      });
    }
  };

  const simulateAnalysis = async () => {
    if (!uploadedFile && !videoUrl) {
      toast({
        title: "未選擇影片",
        description: "請上傳影片檔案或輸入網址",
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
    setApprovalStatus("pending");
    
    toast({
      title: "醫療影片分析完成！",
      description: "ANKH AI 已成功分析您的痛症緩解內容"
    });
  };

  const loadDemoVideo = () => {
    setVideoUrl("https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4");
    toast({
      title: "示範痛症緩解影片已載入",
      description: "ANKH 醫療技術示範影片已準備好進行分析"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            ANKH 影片智能系統
          </CardTitle>
          <CardDescription>
            上傳痛症緩解營銷影片進行先進AI分析及病人特徵匹配
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label className="text-base font-medium">上傳影片檔案</Label>
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
                  <p className="text-sm font-medium mb-2">點擊上傳或拖拉檔案</p>
                  <p className="text-xs text-muted-foreground">MP4, MOV, AVI 最大50MB</p>
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
              <Label htmlFor="video-url" className="text-base font-medium">或輸入影片網址</Label>
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
                載入示範影片
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
                  正在分析影片...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  分析影片
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
                    <span className="text-sm font-medium">AI 處理中</span>
                    <span className="text-sm text-muted-foreground">分析內容中...</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>內容提取</span>
                    <span>語調分析</span>
                    <span>視覺處理</span>
                    <span>特徵匹配</span>
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
              分析結果
            </CardTitle>
            <CardDescription>
              痛症緩解影片內容的全面AI分析報告
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
                      <div className="font-medium">內容摘要</div>
                      <div className="text-sm text-muted-foreground">關鍵主題及信息內容</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">關鍵主題</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.contentSummary.keyTopics.map((topic, index) => (
                          <Badge key={index} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">影片詳情</h4>
                      <div className="space-y-1 text-sm">
                        <div>播放時長: {analysisResults.contentSummary.duration}</div>
                        <div>字數統計: {analysisResults.contentSummary.wordCount}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">主要信息</h4>
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
                      <div className="font-medium">語調分析</div>
                      <div className="text-sm text-muted-foreground">
                        {analysisResults.toneAnalysis.primary} • {analysisResults.toneAnalysis.confidence}% 可信度
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">主要語調</h4>
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
                      <h4 className="font-medium mb-3">情緒指標</h4>
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
                      <div className="font-medium">視覺分析</div>
                      <div className="text-sm text-muted-foreground">色彩、場景及風格分析</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">主導色彩</h4>
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
                        <h4 className="font-medium mb-2">關鍵物件</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResults.visualsBreakdown.objects.map((object, index) => (
                            <Badge key={index} variant="outline">{object}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">場景分析</h4>
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
                        <h4 className="font-medium mb-2">視覺風格</h4>
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
                      <div className="font-medium">客戶特徵匹配</div>
                      <div className="text-sm text-muted-foreground">
                        最佳匹配: {analysisResults.personaMatch.bestFit} • {analysisResults.personaMatch.matchScore}% 匹配度
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div>
                    <h4 className="font-medium mb-3">最佳客戶特徵匹配</h4>
                    <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{analysisResults.personaMatch.bestFit}</span>
                        <Badge className="bg-success text-success-foreground">
                          {analysisResults.personaMatch.matchScore}% 匹配度
                        </Badge>
                      </div>
                      <Progress value={analysisResults.personaMatch.matchScore} className="h-2" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">其他匹配特徵</h4>
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
                      <div className="font-medium">客戶特徵適合度分析</div>
                      <div className="text-sm text-muted-foreground">按客戶特徵分類的影片表現預測</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {analysisResults.personaSuitability.personas.map((persona, index) => {
                      const getSuitabilityColor = (level) => {
                        switch(level) {
                          case '極佳': return 'text-success border-success bg-success/5';
                          case '非常好': return 'text-primary border-primary bg-primary/5';
                          case '良好': return 'text-warning border-warning bg-warning/5';
                          case '一般': return 'text-muted-foreground border-muted-foreground bg-muted/5';
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
                                <Badge variant={persona.suitabilityLevel === '極佳' ? 'default' : 'secondary'}>
                                  {persona.matchScore}% 匹配度
                                </Badge>
                                <div className="text-xs mt-1">{persona.suitabilityLevel}</div>
                              </div>
                            </div>

                            {/* Engagement Predictions */}
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{persona.engagementPrediction.viewCompletion}% 完成率</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MousePointer className="w-3 h-3" />
                                <span>{persona.engagementPrediction.clickThrough}% 點擊率</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Share2 className="w-3 h-3" />
                                <span>{persona.engagementPrediction.shareRate}% 分享率</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ShoppingCart className="w-3 h-3" />
                                <span>{persona.engagementPrediction.conversionRate}% 轉換率</span>
                              </div>
                            </div>

                            {/* Recommendations Preview */}
                            <div className="space-y-2">
                              <div className="text-xs font-medium text-success">✓ 有效因素：</div>
                              <ul className="text-xs space-y-1">
                                {persona.recommendations.slice(0, 2).map((rec, i) => (
                                  <li key={i} className="flex items-start gap-1">
                                    <CheckCircle className="w-2 h-2 text-success flex-shrink-0 mt-1" />
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="text-xs font-medium text-warning">⚡ 改善建議：</div>
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
                    <h4 className="font-medium mb-3">📊 整體適合度摘要</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {Math.round(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.matchScore, 0) / analysisResults.personaSuitability.personas.length)}%
                        </div>
                        <div className="text-xs text-muted-foreground">平均匹配分數</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">
                          {analysisResults.personaSuitability.personas.filter(p => p.suitabilityLevel === '極佳' || p.suitabilityLevel === '非常好').length}
                        </div>
                        <div className="text-xs text-muted-foreground">強匹配項目</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-warning">
                          {Math.round(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.engagementPrediction.viewCompletion, 0) / analysisResults.personaSuitability.personas.length)}%
                        </div>
                        <div className="text-xs text-muted-foreground">平均完成率</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {(analysisResults.personaSuitability.personas.reduce((acc, p) => acc + p.engagementPrediction.conversionRate, 0) / analysisResults.personaSuitability.personas.length).toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">平均轉換率</div>
                      </div>
                    </div>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Compliance & Wording Accuracy Check */}
              <AccordionItem value="compliance" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${
                      analysisResults.complianceCheck.overallStatus === '通過' 
                        ? 'bg-success' 
                        : analysisResults.complianceCheck.overallStatus === '警告'
                        ? 'bg-warning'
                        : 'bg-destructive'
                    }`}>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">表現合規及用詞準確性檢查</div>
                      <div className="text-sm text-muted-foreground">
                        整體狀態: {analysisResults.complianceCheck.overallStatus} • 分數 {analysisResults.complianceCheck.overallScore}/100
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                  {/* Visual Compliance */}
                  <Card className="bg-success/5 border-success/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <ImageIcon className="w-5 h-5 text-success" />
                          <h4 className="font-medium">視覺合規檢查</h4>
                        </div>
                        <Badge className="bg-success text-success-foreground">
                          {analysisResults.complianceCheck.visualCompliance.status} • {analysisResults.complianceCheck.visualCompliance.score}/100
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {analysisResults.complianceCheck.visualCompliance.checks.map((check, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">{check.item}:</span>
                              <span className="text-muted-foreground ml-1">{check.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Audio Compliance */}
                  <Card className="bg-success/5 border-success/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-5 h-5 text-success" />
                          <h4 className="font-medium">音頻合規檢查</h4>
                        </div>
                        <Badge className="bg-success text-success-foreground">
                          {analysisResults.complianceCheck.audioCompliance.status} • {analysisResults.complianceCheck.audioCompliance.score}/100
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {analysisResults.complianceCheck.audioCompliance.checks.map((check, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">{check.item}:</span>
                              <span className="text-muted-foreground ml-1">{check.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Wording Accuracy Issues */}
                  <Card className="bg-warning/5 border-warning/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-warning" />
                          <h4 className="font-medium">用詞準確性問題</h4>
                        </div>
                        <Badge variant="outline" className="border-warning text-warning">
                          {analysisResults.complianceCheck.wordingAccuracy.status} • {analysisResults.complianceCheck.wordingAccuracy.score}/100
                        </Badge>
                      </div>
                      <div className="space-y-4">
                        {analysisResults.complianceCheck.wordingAccuracy.issues.map((issue, index) => (
                          <div key={index} className="border-l-4 border-warning pl-4 py-2">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="destructive" className="text-xs">
                                  嚴重度: {issue.severity}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{issue.location}</span>
                              </div>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">原文:</span>
                                <p className="text-muted-foreground italic">「{issue.text}」</p>
                              </div>
                              <div>
                                <span className="font-medium text-destructive">問題:</span>
                                <p className="text-muted-foreground">{issue.issue}</p>
                              </div>
                              <div>
                                <span className="font-medium text-success">建議:</span>
                                <p className="text-muted-foreground">{issue.suggestion}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Flag className="w-3 h-3 text-warning" />
                                <span className="text-xs text-warning">{issue.regulatoryRisk}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <h5 className="text-sm font-medium mb-2 text-success">✓ 已通過檢查項目:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {analysisResults.complianceCheck.wordingAccuracy.passedChecks.map((check, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-success" />
                              <span>{check.item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Fraud Indicators */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                          <h4 className="font-medium">詐騙及誤導指標</h4>
                        </div>
                        <Badge className="bg-success text-success-foreground">
                          {analysisResults.complianceCheck.fraudIndicators.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {analysisResults.complianceCheck.fraudIndicators.flags.map((flag, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                              {flag.detected ? (
                                <AlertCircle className="w-4 h-4 text-warning" />
                              ) : (
                                <CheckCircle className="w-4 h-4 text-success" />
                              )}
                              <span className="text-sm font-medium">{flag.indicator}</span>
                            </div>
                            <div className="text-right">
                              <Badge variant={flag.detected ? "destructive" : "outline"} className="text-xs">
                                {flag.risk}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">{flag.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card className="card-gold-accent bg-gradient-subtle">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        改善建議
                      </h4>
                      <ul className="space-y-2">
                        {analysisResults.complianceCheck.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">
                              {index + 1}
                            </span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}

      {/* Approval Workflow */}
      {analysisResults && (
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              影片審批工作流程
            </CardTitle>
            <CardDescription>
              確認影片符合合規及準確性要求後批准發佈
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Display */}
            <div className="flex items-center justify-center gap-4 p-6 bg-gradient-subtle rounded-lg border">
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2 ${
                  approvalStatus === 'approved' 
                    ? 'bg-success text-success-foreground' 
                    : approvalStatus === 'rejected'
                    ? 'bg-destructive text-destructive-foreground'
                    : 'bg-warning text-warning-foreground'
                }`}>
                  {approvalStatus === 'approved' && <CheckCircle className="w-8 h-8" />}
                  {approvalStatus === 'rejected' && <XCircle className="w-8 h-8" />}
                  {approvalStatus === 'pending' && <AlertCircle className="w-8 h-8" />}
                </div>
                <div className="font-medium text-lg">
                  {approvalStatus === 'approved' && '已批准發佈'}
                  {approvalStatus === 'rejected' && '已拒絕發佈'}
                  {approvalStatus === 'pending' && '等待審批'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {approvalStatus === 'approved' && '影片已通過所有檢查，可以發佈'}
                  {approvalStatus === 'rejected' && '影片需要修正後重新提交'}
                  {approvalStatus === 'pending' && '請檢查分析結果並決定是否批准'}
                </div>
              </div>
            </div>

            {/* Compliance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {analysisResults.complianceCheck.visualCompliance.score}
                </div>
                <div className="text-xs text-muted-foreground">視覺合規分數</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {analysisResults.complianceCheck.audioCompliance.score}
                </div>
                <div className="text-xs text-muted-foreground">音頻合規分數</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl font-bold text-warning mb-1">
                  {analysisResults.complianceCheck.wordingAccuracy.score}
                </div>
                <div className="text-xs text-muted-foreground">用詞準確性分數</div>
              </div>
            </div>

            {/* Action Buttons */}
            {approvalStatus === 'pending' && (
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setApprovalStatus('rejected');
                    toast({
                      title: "影片已拒絕",
                      description: "影片需要根據建議進行修正",
                      variant: "destructive"
                    });
                  }}
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <XCircle className="w-5 h-5 mr-2" />
                  拒絕發佈
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    setApprovalStatus('approved');
                    toast({
                      title: "影片已批准！",
                      description: "影片可以正式發佈到營銷渠道",
                      className: "bg-success text-success-foreground"
                    });
                  }}
                  className="bg-success hover:bg-success/90 text-success-foreground"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  批准發佈
                </Button>
              </div>
            )}

            {approvalStatus !== 'pending' && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setApprovalStatus('pending');
                    toast({
                      title: "狀態已重設",
                      description: "可以重新審批影片"
                    });
                  }}
                >
                  重新審批
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VisualAnalytics;