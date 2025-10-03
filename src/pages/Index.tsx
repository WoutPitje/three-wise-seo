import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEO 
        title="YourBrand - Modern Web Solutions for Your Business"
        description="Transform your digital presence with cutting-edge web solutions. We deliver exceptional websites and applications tailored to your business needs."
        keywords="web development, modern websites, digital solutions, business growth"
        url="https://yourbrand.com"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="container px-4 py-24 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Transform Your Digital{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Presence
                </span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                Build exceptional web experiences that drive growth and captivate your audience with our modern solutions
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="gap-2">
                  <Link to="/services">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="container px-4 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized performance ensures your website loads instantly, keeping users engaged
                </p>
              </Card>
              
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security measures protect your data and ensure uptime
                </p>
              </Card>
              
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Modern Design</h3>
                <p className="text-muted-foreground">
                  Beautiful, responsive interfaces that work seamlessly across all devices
                </p>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
