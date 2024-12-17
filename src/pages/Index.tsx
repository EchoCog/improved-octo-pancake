import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Bot, Workflow, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400">Monitor and manage your AI workflows and chatbots.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricsCard
            title="Active Chatbots"
            value="12"
            icon={<Bot className="w-4 h-4 text-blue-400" />}
            description="+2 from last week"
          />
          <MetricsCard
            title="Active Workflows"
            value="8"
            icon={<Workflow className="w-4 h-4 text-green-400" />}
            description="3 running now"
          />
          <MetricsCard
            title="Team Members"
            value="24"
            icon={<Users className="w-4 h-4 text-purple-400" />}
            description="4 pending invites"
          />
          <MetricsCard
            title="API Calls"
            value="1.2M"
            icon={<Zap className="w-4 h-4 text-yellow-400" />}
            description="Last 30 days"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ActivityFeed />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;