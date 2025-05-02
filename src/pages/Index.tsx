
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, UserCheck, Search } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  const features = [
    {
      title: "Easy Registration",
      description: "Register your SIM card in minutes with our streamlined process.",
      icon: <Smartphone className="h-10 w-10 text-sim-blue" />,
    },
    {
      title: "Secure Verification",
      description: "Your data is protected with advanced encryption and security protocols.",
      icon: <Shield className="h-10 w-10 text-sim-blue" />,
    },
    {
      title: "Identity Protection",
      description: "Verify identities while protecting personal information.",
      icon: <UserCheck className="h-10 w-10 text-sim-blue" />,
    },
    {
      title: "Real-time Status Updates",
      description: "Check your registration status anytime, anywhere.",
      icon: <Search className="h-10 w-10 text-sim-blue" />,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Integrated SIM Registration System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Secure, compliant, and efficient mobile identity registration for carriers and subscribers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-sim-blue hover:bg-sim-blue-dark text-lg">
                Register SIM
              </Button>
            </Link>
            <Link to="/status">
              <Button size="lg" variant="outline" className="text-lg">
                Check Status
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sim-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SimConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sim-blue-light rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sim-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-muted-foreground">
                Sign up and create your personal account in our system
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sim-blue-light rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sim-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Information</h3>
              <p className="text-muted-foreground">
                Provide the required identification and SIM details
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sim-blue-light rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sim-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
              <p className="text-muted-foreground">
                Receive confirmation and start using your registered SIM
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/register">
              <Button size="lg" className="bg-sim-blue hover:bg-sim-blue-dark">
                Start Registration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sim-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Register Your SIM Card?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of users who have securely registered their SIM cards with SimConnect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-sim-blue bg-white hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
            <Link to="/help">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-sim-blue-dark">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
