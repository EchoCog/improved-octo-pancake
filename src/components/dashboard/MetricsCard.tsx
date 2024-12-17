import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

export function MetricsCard({ title, value, icon, description }: MetricsCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-200">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        {description && (
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}