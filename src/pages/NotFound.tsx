import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="card-elevated max-w-md w-full text-center">
        <CardHeader>
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
            <span className="text-3xl font-bold">404</span>
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist in the ANKH AI platform.
          </p>
          <div className="space-y-2">
            <Button asChild className="btn-primary w-full">
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Dashboard
              </a>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
