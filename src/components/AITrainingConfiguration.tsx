import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Database, 
  Upload, 
  FileVideo, 
  FileText, 
  Settings, 
  Zap,
  CheckCircle,
  AlertCircle,
  Upload as UploadIcon 
} from "lucide-react";

const AITrainingConfiguration = () => {
  const [trainingPrompt, setTrainingPrompt] = useState("");
  const [selectedDataSource, setSelectedDataSource] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const { toast } = useToast();

  const dataSourceOptions = [
    { value: "voice", label: "語音分析數據", icon: FileText },
    { value: "video", label: "影片分析數據", icon: FileVideo },
    { value: "customer", label: "客戶分析數據", icon: Database }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setUploadedFiles(prev => [...prev, ...fileArray]);
      toast({
        title: "檔案上傳成功",
        description: `已成功上傳 ${fileArray.length} 個檔案`,
      });
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!trainingPrompt.trim()) {
      toast({
        title: "請輸入訓練提示",
        description: "訓練提示不能為空",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedDataSource) {
      toast({
        title: "請選擇數據來源",
        description: "請選擇至少一個數據來源類型",
        variant: "destructive"
      });
      return;
    }

    setShowConfirmModal(true);
  };

  const confirmTraining = () => {
    setIsTraining(true);
    setShowConfirmModal(false);
    
    // Simulate training process
    setTimeout(() => {
      setIsTraining(false);
      toast({
        title: "AI訓練已啟動",
        description: "混合式 DeepSeek R1 及 OpenAI GPT-4o 模型訓練程序已開始執行",
      });
    }, 2000);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.mp4') || fileName.endsWith('.avi') || fileName.endsWith('.mov')) {
      return <FileVideo className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <Card className="card-elevated bg-gradient-medical text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg">
              <Brain className="w-6 h-6" />
            </div>
            AI 訓練配置中心
          </CardTitle>
          <CardDescription className="text-white/80 text-base">
            配置混合式 DeepSeek R1 及 OpenAI GPT-4o 模型進行個人化營銷優化訓練
            <br />
            <span className="text-sm opacity-75">最後更新：2025年9月5日 下午6:25 香港時間</span>
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Training Configuration Form */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              訓練參數設置
            </CardTitle>
            <CardDescription>
              定義AI模型訓練目標及數據來源配置
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Training Prompt Input */}
            <div className="space-y-2">
              <Label htmlFor="training-prompt" className="text-sm font-medium">
                訓練提示指令
              </Label>
              <Textarea
                id="training-prompt"
                placeholder="例如: 訓練模型提升電話銷售轉換率，運用通話情感分析技術"
                value={trainingPrompt}
                onChange={(e) => setTrainingPrompt(e.target.value)}
                className="min-h-[100px] resize-none"
              />
              <p className="text-xs text-muted-foreground">
                請詳細描述訓練目標、應用場景及預期成效
              </p>
            </div>

            {/* Data Source Selection */}
            <div className="space-y-2">
              <Label htmlFor="data-source" className="text-sm font-medium">
                數據來源類型
              </Label>
              <Select value={selectedDataSource} onValueChange={setSelectedDataSource}>
                <SelectTrigger id="data-source">
                  <SelectValue placeholder="請選擇訓練數據來源" />
                </SelectTrigger>
                <SelectContent>
                  {dataSourceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <option.icon className="w-4 h-4" />
                        {option.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* File Upload Section */}
            <div className="space-y-2">
              <Label htmlFor="dataset-upload" className="text-sm font-medium">
                訓練數據集上傳
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <UploadIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  拖放檔案至此或點擊選擇檔案
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  支援格式：CSV, MP4, TXT, JSON (最大 100MB)
                </p>
                <Input
                  id="dataset-upload"
                  type="file"
                  multiple
                  accept=".csv,.mp4,.txt,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('dataset-upload')?.click()}
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  選擇檔案
                </Button>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2 mt-4">
                  <Label className="text-sm font-medium">已上傳檔案：</Label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.name)}
                          <span className="text-sm truncate">{file.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {(file.size / 1024 / 1024).toFixed(1)} MB
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm" 
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              className="w-full btn-primary"
              disabled={isTraining}
            >
              {isTraining ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  正在啟動訓練...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  提交訓練提示
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Training Status & Info */}
        <div className="space-y-6">
          {/* Model Information */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                AI 模型架構
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-gradient-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="font-medium text-sm">DeepSeek R1 模型</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    先進推理引擎，專精邏輯分析及決策優化
                  </p>
                </div>

                <div className="p-3 bg-gradient-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">OpenAI GPT-4o</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    多模態處理引擎，處理文本、圖像及語音數據
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  混合式架構結合兩大AI引擎優勢，實現精準個人化營銷策略
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Training Guidelines */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                訓練指引
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p>提供清晰具體的訓練目標描述</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p>選擇與目標相符的數據來源類型</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p>上傳高質量標註訓練數據集</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p>訓練時間約需 2-4 小時完成</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              確認訓練配置
            </DialogTitle>
            <DialogDescription>
              請確認以下訓練配置資訊無誤後提交
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label className="text-sm font-medium text-muted-foreground">訓練提示：</Label>
              <p className="text-sm bg-muted p-2 rounded mt-1">{trainingPrompt}</p>
            </div>

            <div>
              <Label className="text-sm font-medium text-muted-foreground">數據來源：</Label>
              <p className="text-sm">
                {dataSourceOptions.find(opt => opt.value === selectedDataSource)?.label}
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <Label className="text-sm font-medium text-muted-foreground">
                  上傳檔案 ({uploadedFiles.length} 個)：
                </Label>
                <div className="text-sm space-y-1 max-h-20 overflow-y-auto">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="text-muted-foreground">
                      • {file.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
              取消
            </Button>
            <Button onClick={confirmTraining} className="btn-primary">
              <Zap className="w-4 h-4 mr-2" />
              啟動訓練
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AITrainingConfiguration;