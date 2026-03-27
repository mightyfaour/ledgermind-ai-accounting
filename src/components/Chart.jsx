import { PieChart, Pie, Cell } from "recharts";

export default function Chart({ data }) {
  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} />
        ))}
      </Pie>
    </PieChart>
  );
}