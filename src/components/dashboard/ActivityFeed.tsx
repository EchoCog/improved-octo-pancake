import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Workflow, Settings } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "chatbot",
    message: "New chatbot deployed",
    timestamp: "2 minutes ago",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "workflow",
    message: "Workflow automation updated",
    timestamp: "1 hour ago",
    icon: Workflow,
  },
  {
    id: 3,
    type: "settings",
    message: "Organization settings changed",
    timestamp: "2 hours ago",
    icon: Settings,
  },
];

export function ActivityFeed() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-lg text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-3 text-slate-300 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <activity.icon className="w-5 h-5" />
              <div className="flex-1">
                <p className="text-sm text-white">{activity.message}</p>
                <p className="text-xs text-slate-400">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}