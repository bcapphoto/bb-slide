import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: 0, facebook: 1, instagram: 1, tiktok: 1, chatgpt: 1 },
  { month: 1, facebook: 1.2, instagram: 1.5, tiktok: 8, chatgpt: 57 },
  { month: 2, facebook: 1.5, instagram: 2, tiktok: 15, chatgpt: 100 },
  { month: 3, facebook: 1.8, instagram: 3, tiktok: 25 },
  { month: 6, facebook: 2.5, instagram: 5, tiktok: 50 },
  { month: 9, facebook: 3.5, instagram: 8, tiktok: 100 },
  { month: 12, facebook: 5.5, instagram: 14 },
  { month: 18, facebook: 8, instagram: 30 },
  { month: 24, facebook: 12, instagram: 80 },
  { month: 30, facebook: 18, instagram: 100 },
  { month: 36, facebook: 50 },
  { month: 48, facebook: 80 },
  { month: 54, facebook: 100 },
];

const lines = [
  { key: "facebook", color: "#4267B2", label: "Facebook" },
  { key: "instagram", color: "#E1306C", label: "Instagram" },
  { key: "tiktok", color: "#25F4EE", label: "TikTok" },
  { key: "chatgpt", color: "hsl(15, 85%, 58%)", label: "ChatGPT" },
];

const GrowthChart = () => (
  <div className="w-full max-w-3xl mx-auto">
    <h3 className="text-lg font-light text-muted-foreground mb-2 tracking-wide">
      Time to 100M Users
    </h3>
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <XAxis
            dataKey="month"
            stroke="hsl(225, 8%, 30%)"
            tick={{ fill: "hsl(225, 8%, 45%)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Months",
              position: "insideBottom",
              offset: -5,
              fill: "hsl(225, 8%, 45%)",
              fontSize: 11,
            }}
          />
          <YAxis
            stroke="hsl(225, 8%, 30%)"
            tick={{ fill: "hsl(225, 8%, 45%)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Users (M)",
              angle: -90,
              position: "insideLeft",
              fill: "hsl(225, 8%, 45%)",
              fontSize: 11,
            }}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(225, 20%, 8%)",
              border: "1px solid hsl(225, 15%, 15%)",
              borderRadius: "8px",
              color: "hsl(40, 15%, 93%)",
              fontSize: 12,
            }}
            formatter={(value: number, name: string) => [
              `${value}M`,
              lines.find((l) => l.key === name)?.label || name,
            ]}
            labelFormatter={(label) => `Month ${label}`}
          />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={2.5}
              dot={false}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="flex gap-6 justify-center mt-4">
      {lines.map((line) => (
        <div key={line.key} className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-0.5 rounded" style={{ background: line.color }} />
          {line.label}
        </div>
      ))}
    </div>
  </div>
);

export default GrowthChart;
