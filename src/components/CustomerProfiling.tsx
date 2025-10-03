import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  Users, 
  Brain, 
  FileText, 
  Target, 
  TrendingUp,
  CheckCircle,
  Loader2,
  UserCheck,
  Heart,
  ShoppingCart,
  Clock
} from "lucide-react";

const CustomerProfiling = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [profileResults, setProfileResults] = useState(null);
  const [customerData, setCustomerData] = useState({
    name: "",
    age: "",
    location: "",
    interests: "",
    pastInteractions: "",
    purchaseHistory: ""
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const { toast } = useToast();

  const mockProfileResults = {
    personaType: "活躍長者尋求者",
    confidence: 92,
    demographics: {
      ageRange: "60-75歲",
      income: "港幣$320,000 - $640,000",
      education: "中學至大學程度",
      location: "新界及市區住宅區",
      lifestyle: "活躍退休生活，注重健康"
    },
    preferences: {
      contentTypes: ["教育短片 (3-5分鐘)", "用戶見證", "清晰產品演示"],
      channels: ["電子郵件", "Facebook", "醫療保健網站", "印刷資料"],
      timing: "早上時段 (上午9-11時)，傍晚時段 (下午5-7時)",
      tone: "值得信賴、富同理心、易於理解"
    },
    behavior: {
      decisionMaking: "謹慎考慮，尋求醫學驗證",
      responseToOffers: "重視安全性和療效勝於價格",
      socialInfluence: "醫生推薦至關重要",
      brandLoyalty: "建立信任後忠誠度高"
    },
    recommendations: [
      "強調安全性和非侵入性特點",
      "包含醫生認可和臨床研究證據",
      "展示真實長者使用情況",
      "提供清晰的逐步使用指南",
      "突出改善活動能力和獨立性的益處",
      "使用較大字體和簡潔導航設計"
    ]
  };

  const handleInputChange = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/csv' || file.type === 'application/vnd.ms-excel')) {
      setUploadedFile(file);
      toast({
        title: "客戶資料已上載",
        description: `${file.name} 已準備好進行分析`
      });
    } else {
      toast({
        title: "檔案格式無效",
        description: "請上載CSV檔案",
        variant: "destructive"
      });
    }
  };

  const simulateAnalysis = async () => {
    const hasManualData = Object.values(customerData).some(value => value.trim() !== "");
    
    if (!uploadedFile && !hasManualData) {
      toast({
        title: "未提供客戶資料",
        description: "請上載CSV檔案或填寫客戶資訊",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setProfileResults(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2500));

    setProfileResults(mockProfileResults);
    setIsAnalyzing(false);
    
    toast({
      title: "客戶輪廓分析完成！",
      description: "客戶特徵檔案已成功生成"
    });
  };

  const loadDemoData = () => {
    setCustomerData({
      name: "陳婆婆",
      age: "68",
      location: "香港，沙田區",
      interests: "園藝種植，散步運動，社區活動，健康養生，照顧孫兒",
      pastInteractions: "瀏覽疼痛管理頁面8次，下載關節炎護理指南，參加線上健康講座，聯絡客服2次",
      purchaseHistory: "健康補充品：每月港幣$1,200，醫療設備：每年港幣$6,400，物理治療療程：每年港幣$19,200"
    });
    
    toast({
      title: "示範資料已載入",
      description: "疼痛緩解客戶樣本檔案已準備好進行分析"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            客戶特徵分析
          </CardTitle>
          <CardDescription>
            上載客戶資料或手動輸入資訊以生成詳細的客戶特徵檔案
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Data Input Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Upload */}
            <div className="space-y-4">
              <Label className="text-base font-medium">上載客戶資料 (CSV)</Label>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/60 transition-colors">
                <input
                  type="file"
                  accept=".csv,.xlsx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">上載CSV檔案</p>
                  <p className="text-xs text-muted-foreground">
                    包含欄位：姓名、年齡、喜好、互動紀錄等
                  </p>
                </label>
                {uploadedFile && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{uploadedFile.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Manual Entry */}
            <div className="space-y-4">
              <Label className="text-base font-medium">或輸入客戶資訊</Label>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">姓名</Label>
                    <Input
                      id="name"
                      placeholder="客戶姓名"
                      value={customerData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">年齡</Label>
                    <Input
                      id="age"
                      placeholder="年齡"
                      value={customerData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">地區</Label>
                  <Input
                    id="location"
                    placeholder="城市，地區"
                    value={customerData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="interests">興趣及偏好</Label>
                  <Textarea
                    id="interests"
                    placeholder="健康養生、運動康復、家庭活動..."
                    value={customerData.interests}
                    onChange={(e) => handleInputChange("interests", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="interactions">過往互動紀錄</Label>
                  <Textarea
                    id="interactions"
                    placeholder="電郵點擊、下載紀錄、網站瀏覽..."
                    value={customerData.pastInteractions}
                    onChange={(e) => handleInputChange("pastInteractions", e.target.value)}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                onClick={loadDemoData}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                載入示範客戶
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
                  正在分析客戶輪廓...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  分析客戶輪廓
                </>
              )}
            </Button>
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <Card className="bg-gradient-subtle">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">處理客戶資料中</div>
                    <div className="text-xs text-muted-foreground">
                      分析人口統計資料 • 識別模式 • 生成客戶特徵
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="animate-pulse-soft">
                      <Brain className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Profile Results */}
      {profileResults && (
        <div className="space-y-6">
          {/* Persona Overview */}
          <Card className="card-elevated bg-gradient-subtle border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">{profileResults.personaType}</CardTitle>
              <CardDescription>
                <Badge className="bg-success text-success-foreground">
                  {profileResults.confidence}% 匹配度
                </Badge>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Demographics */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    <Target className="w-4 h-4" />
                  </div>
                  人口統計資料
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">年齡範圍</Label>
                    <p className="font-medium">{profileResults.demographics.ageRange}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">收入水平</Label>
                    <p className="font-medium">{profileResults.demographics.income}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">教育程度</Label>
                    <p className="font-medium">{profileResults.demographics.education}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">生活方式</Label>
                    <p className="font-medium">{profileResults.demographics.lifestyle}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">居住地區</Label>
                  <p className="font-medium">{profileResults.demographics.location}</p>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center text-white">
                    <Heart className="w-4 h-4" />
                  </div>
                  喜好偏向
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs text-muted-foreground mb-2 block">內容類型</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileResults.preferences.contentTypes.map((type, index) => (
                      <Badge key={index} variant="secondary">{type}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-2 block">偏好渠道</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileResults.preferences.channels.map((channel, index) => (
                      <Badge key={index} variant="outline">{channel}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">最佳時段</Label>
                  <p className="text-sm">{profileResults.preferences.timing}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">語調偏好</Label>
                  <p className="text-sm">{profileResults.preferences.tone}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Behavior Analysis */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center text-white">
                  <TrendingUp className="w-4 h-4" />
                </div>
                行為洞察
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">決策模式</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.decisionMaking}</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">優惠反應</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.responseToOffers}</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">社會影響</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.socialInfluence}</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <Label className="text-xs text-muted-foreground block mb-1">品牌忠誠度</Label>
                  <p className="text-sm font-medium">{profileResults.behavior.brandLoyalty}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="card-elevated border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI 建議
              </CardTitle>
              <CardDescription>
                基於客戶特徵的個性化營銷策略
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileResults.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-subtle rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CustomerProfiling;