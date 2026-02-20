import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { name: "Facebook", months: 54, label: "~4.5 years", color: "#4267B2" },
  { name: "Instagram", months: 30, label: "~2.5 years", color: "#E1306C" },
  { name: "TikTok", months: 9, label: "~9 months", color: "#69C9D0" },
  { name: "ChatGPT", months: 2, label: "2 months", color: "hsl(82, 72%, 52%)" },
];

const GrowthChart = () => (
  <div className="w-full max-w-5xl mx-auto text-left">
    <p className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground font-bold mb-3">
      Speed of Adoption
    </p>
    <h2 className="font-title text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-10">
      Time to <span className="highlight-green">100M</span> Users
    </h2>
    <div className="h-[280px] md:h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 80, left: 0, bottom: 0 }}
          barCategoryGap="28%"
        >
          <XAxis
            type="number"
            hide
            domain={[0, 60]}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={110}
            tick={{ fill: "hsl(0, 0%, 70%)", fontSize: 14, fontWeight: 600 }}
          />
          <Bar dataKey="months" radius={[0, 6, 6, 0]} barSize={36}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} fillOpacity={index === data.length - 1 ? 1 : 0.35} />
            ))}
            <LabelList
              dataKey="label"
              position="right"
              style={{ fill: "hsl(0, 0%, 60%)", fontSize: 13, fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <p className="text-muted-foreground font-light text-sm md:text-base mt-6 max-w-2xl">
      ChatGPT reached 100 million users <span className="text-primary font-bold">27× faster</span> than Facebook.
      AI isn't just fast - it's resetting what "adoption" looks like.
    </p>
  </div>
);

export default GrowthChart;
