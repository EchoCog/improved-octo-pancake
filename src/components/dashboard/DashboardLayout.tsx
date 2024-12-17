import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LayoutDashboard, MessageSquare, Workflow, Settings, Users } from "lucide-react";

const menuItems = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, href: "/" },
      { title: "Chatbots", icon: MessageSquare, href: "/chatbots" },
      { title: "Workflows", icon: Workflow, href: "/workflows" },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "Organization", icon: Users, href: "/organization" },
      { title: "Settings", icon: Settings, href: "/settings" },
    ],
  },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-900">
        <DashboardSidebar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar() {
  return (
    <Sidebar className="border-r border-slate-800">
      <div className="p-4 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white">AI Admin</h1>
      </div>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center gap-2 text-slate-300 hover:text-white">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}