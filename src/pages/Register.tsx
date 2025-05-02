
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Register = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idType: "",
    idNumber: "",
    phoneNumber: "",
    simNumber: "",
    networkProvider: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, agreeToTerms: checked });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("SIM registration submitted successfully!");
      // In a real app, redirect to confirmation or status page
      
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">SIM Card Registration</h1>
          
          <Tabs defaultValue="individual" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Registration</CardTitle>
                  <CardDescription>
                    Register a SIM card under your personal information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="idType">ID Type</Label>
                          <Select
                            value={formData.idType}
                            onValueChange={(value) => handleSelectChange("idType", value)}
                          >
                            <SelectTrigger id="idType">
                              <SelectValue placeholder="Select ID Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="national_id">National ID</SelectItem>
                              <SelectItem value="passport">Passport</SelectItem>
                              <SelectItem value="drivers_license">Driver's License</SelectItem>
                              <SelectItem value="voter_id">Voter's ID</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idNumber">ID Number</Label>
                          <Input
                            id="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">SIM Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+1 (XXX) XXX-XXXX"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="simNumber">SIM Number (ICCID)</Label>
                          <Input
                            id="simNumber"
                            value={formData.simNumber}
                            onChange={handleChange}
                            placeholder="19-20 digit number on SIM card"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="networkProvider">Network Provider</Label>
                        <Select
                          value={formData.networkProvider}
                          onValueChange={(value) => handleSelectChange("networkProvider", value)}
                        >
                          <SelectTrigger id="networkProvider">
                            <SelectValue placeholder="Select Provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="provider_a">Provider A</SelectItem>
                            <SelectItem value="provider_b">Provider B</SelectItem>
                            <SelectItem value="provider_c">Provider C</SelectItem>
                            <SelectItem value="provider_d">Provider D</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and certify that the information provided is accurate.
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-sim-blue hover:bg-sim-blue-dark" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting Registration..." : "Submit Registration"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                  Your information is secure and will only be used for SIM registration purposes.
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Business Registration</CardTitle>
                  <CardDescription>
                    Register SIM cards for business or organizational use.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-8 text-center">
                    <h3 className="text-lg font-medium mb-4">Business Registration Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're currently developing our business registration module. 
                      Please check back later or contact our support team for assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
