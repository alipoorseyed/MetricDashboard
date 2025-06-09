"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";

interface ChartProps {
  data: {
    Revenue: number;
    Users: number;
    Visits: number;
    Transactions: number;
  };
}

const COLORS = ["#00FF7F", "#32CD32", "#228B22", "#006400"];

const Charts = ({ data }: ChartProps) => {
  const pieData = [
    { name: "Revenue", value: data.Revenue },
    { name: "Users", value: data.Users },
    { name: "Visits", value: data.Visits },
    { name: "Transactions", value: data.Transactions },
  ];

  // داده‌های خطی برای زیبایی بیشتر
  const lineData = [
    {
      name: "Week 1",
      Revenue: data.Revenue * 0.2,
      Users: data.Users * 0.25,
      Visits: data.Visits * 0.2,
      Transactions: data.Transactions * 0.3,
    },
    {
      name: "Week 2",
      Revenue: data.Revenue * 0.3,
      Users: data.Users * 0.2,
      Visits: data.Visits * 0.3,
      Transactions: data.Transactions * 0.25,
    },
    {
      name: "Week 3",
      Revenue: data.Revenue * 0.25,
      Users: data.Users * 0.3,
      Visits: data.Visits * 0.25,
      Transactions: data.Transactions * 0.2,
    },
    {
      name: "Week 4",
      Revenue: data.Revenue * 0.25,
      Users: data.Users * 0.25,
      Visits: data.Visits * 0.25,
      Transactions: data.Transactions * 0.25,
    },
  ];

  const barData = [
    {
      name: "Metric",
      Revenue: data.Revenue,
      Users: data.Users,
      Visits: data.Visits,
      Transactions: data.Transactions,
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-10">
      {/* Pie Chart */}
      <div className="w-1/4 max-xl:w-2/3 grow h-[300px] bg-black rounded-2xl p-4 shadow-md shadow-green-500/20">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="w-1/4 max-xl:w-2/3 grow h-[300px] bg-black rounded-2xl p-4 shadow-md shadow-green-500/20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis dataKey="name" stroke="#00FF7F" />
            <YAxis stroke="#00FF7F" />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" stroke="#2f855a" />
            <Line
              type="monotone"
              dataKey="Revenue"
              stroke="#00FF7F"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="Users"
              stroke="#32CD32"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="Visits"
              stroke="#228B22"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="Transactions"
              stroke="#006400"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-1/4 max-xl:w-2/3 grow h-[300px] bg-black rounded-2xl p-4 shadow-md shadow-green-500/20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#00FF7F" />
            <YAxis stroke="#00FF7F" />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" stroke="#2f855a" />

            <Bar dataKey="Revenue" fill="#00FF7F">
              <LabelList dataKey="Revenue" position="top" fill="#00FF7F" />
            </Bar>
            <Bar dataKey="Users" fill="#32CD32">
              <LabelList dataKey="Users" position="top" fill="#32CD32" />
            </Bar>
            <Bar dataKey="Visits" fill="#228B22">
              <LabelList dataKey="Visits" position="top" fill="#228B22" />
            </Bar>
            <Bar dataKey="Transactions" fill="#006400">
              <LabelList dataKey="Transactions" position="top" fill="#006400" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
