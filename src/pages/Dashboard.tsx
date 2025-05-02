
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Smartphone, User, FileText, AlertTriangle, Check } from "lucide-react";

const Dashboard = () => {
  // Mock data for registered SIM cards
  const registeredSims = [
    {
      id: "sim-1",
      phoneNumber: "+1 (555) 123-4567",
      simNumber: "8991234567890123456",
      provider: "Provider A",
      status: "active",
      registeredOn: "2023-10-15",
    },
    {
      id: "sim-2",
      phoneNumber: "+1 (555) 987-6543",
      simNumber: "8991234567890123457",
      provider: "Provider B",
      status: "pending",
      registeredOn: "2023-11-02",
    },
  ];

  // Mock data for pending registrations
  const pendingRegistrations = [
    {
      id: "reg-1",
      phoneNumber: "+1 (555) 987-6543",
      simNumber: "8991234567890123457",
      provider: "Provider B",
      submittedOn: "2023-11-02",
      status: "verification_needed",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your SIM registrations and account</p>
          </div>
          <Button className="bg-sim-blue hover:bg-sim-blue-dark">Register New SIM</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total SIM Cards</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registeredSims.length}</div>
              <p className="text-xs text-muted-foreground">Registered SIM cards</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active SIMs</CardTitle>
              <Check className="h-4 w-4 text-sim-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {registeredSims.filter(sim => sim.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">In good standing</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <AlertTriangle className="h-4 w-4 text-sim-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingRegistrations.length}</div>
              <p className="text-xs text-muted-foreground">Awaiting verification</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="registered" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="registered">Registered SIMs</TabsTrigger>
            <TabsTrigger value="pending">Pending Registrations</TabsTrigger>
          </TabsList>
          <TabsContent value="registered">
            <Card>
              <CardHeader>
                <CardTitle>Your Registered SIMs</CardTitle>
                <CardDescription>
                  Manage and review your active SIM registrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-2 text-left">Phone Number</th>
                        <th className="py-3 px-2 text-left">SIM Number</th>
                        <th className="py-3 px-2 text-left">Provider</th>
                        <th className="py-3 px-2 text-left">Status</th>
                        <th className="py-3 px-2 text-left">Registered On</th>
                        <th className="py-3 px-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registeredSims.map((sim) => (
                        <tr key={sim.id} className="border-b">
                          <td className="py-3 px-2">{sim.phoneNumber}</td>
                          <td className="py-3 px-2">{sim.simNumber}</td>
                          <td className="py-3 px-2">{sim.provider}</td>
                          <td className="py-3 px-2">
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                              sim.status === "active" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {sim.status === "active" ? "Active" : "Pending"}
                            </span>
                          </td>
                          <td className="py-3 px-2">{sim.registeredOn}</td>
                          <td className="py-3 px-2">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                      {registeredSims.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-6 text-center text-muted-foreground">
                            No registered SIM cards found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Registrations</CardTitle>
                <CardDescription>
                  SIM registrations awaiting verification or approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-2 text-left">Phone Number</th>
                        <th className="py-3 px-2 text-left">SIM Number</th>
                        <th className="py-3 px-2 text-left">Provider</th>
                        <th className="py-3 px-2 text-left">Status</th>
                        <th className="py-3 px-2 text-left">Submitted On</th>
                        <th className="py-3 px-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingRegistrations.map((reg) => (
                        <tr key={reg.id} className="border-b">
                          <td className="py-3 px-2">{reg.phoneNumber}</td>
                          <td className="py-3 px-2">{reg.simNumber}</td>
                          <td className="py-3 px-2">{reg.provider}</td>
                          <td className="py-3 px-2">
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-yellow-100 text-yellow-800">
                              Verification Needed
                            </span>
                          </td>
                          <td className="py-3 px-2">{reg.submittedOn}</td>
                          <td className="py-3 px-2">
                            <Button variant="ghost" size="sm">Complete</Button>
                          </td>
                        </tr>
                      ))}
                      {pendingRegistrations.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-6 text-center text-muted-foreground">
                            No pending registrations found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
