import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Code, Palette, Rocket, Database, Shield, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and scalability"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement"
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that align with your business goals and drive growth"
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust backend systems and APIs that power your applications with reliability and security"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing support, security updates, and maintenance to keep your digital assets safe"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Responsive designs and mobile-first approaches ensuring perfect experiences on any device"
    }
  ];
  
  return (
    <>
      <SEO 
        title="Our Services - YourBrand | Web Development & Digital Solutions"
        description="Explore our comprehensive range of digital services including web development, UI/UX design, digital strategy, and more. Let us help transform your business."
        keywords="web development services, UI/UX design, digital strategy, backend development, mobile optimization"
        url="https://yourbrand.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="container px-4 py-16">
          <article className="mx-auto max-w-6xl">
            {/* Hero Section */}
            <section className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital solutions tailored to elevate your business
              </p>
            </section>
            
            {/* Services Grid */}
            <section className="mb-16">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 transition-all hover:shadow-lg">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="rounded-lg bg-gradient-to-r from-primary to-accent p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mb-6 text-lg opacity-90">
                Let's discuss how we can help transform your digital presence
              </p>
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default Services;
