import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", baptisms: 8 },
  { month: "Feb", baptisms: 12 },
  { month: "Mar", baptisms: 9 },
  { month: "Apr", baptisms: 14 },
  { month: "May", baptisms: 11 },
  { month: "Jun", baptisms: 17 },
  { month: "Jul", baptisms: 15 },
  { month: "Aug", baptisms: 22 },
];

export default function StakeTrendChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-800 p-6 shadow-lg">
      <h2 className="mb-1 text-xl font-semibold text-white">
        Stake Baptism Trend
      </h2>

      <p className="mb-6 text-sm text-slate-400">
        Monthly convert baptisms
      </p>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="month" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="baptisms"
              stroke="#3b82f6"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}