import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - YourBrand | Our Story and Mission"
        description="Learn about our journey, mission, and the passionate team dedicated to delivering exceptional digital solutions that transform businesses."
        keywords="about us, company mission, team, digital solutions"
        url="https://yourbrand.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="container px-4 py-16">
          <article className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <section className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  YourBrand
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to transform how businesses connect with their audience through innovative digital experiences
              </p>
            </section>
            
            {/* Story Section */}
            <section className="mb-16">
              <Card className="p-8">
                <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Founded with a vision to bridge the gap between technology and business needs, YourBrand has been at the forefront of digital innovation. Our journey began with a simple belief: every business deserves access to world-class web solutions.
                </p>
                <p className="text-muted-foreground">
                  Today, we've grown into a trusted partner for businesses of all sizes, delivering cutting-edge solutions that drive real results. Our commitment to excellence and innovation continues to guide everything we do.
                </p>
              </Card>
            </section>
            
            {/* Values Section */}
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Client-Focused</h3>
                  <p className="text-muted-foreground">
                    Your success is our priority. We listen, understand, and deliver solutions tailored to your unique needs
                  </p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of the curve, embracing new technologies to deliver cutting-edge solutions
                  </p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    Quality is non-negotiable. We maintain the highest standards in everything we create
                  </p>
                </Card>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default About;
