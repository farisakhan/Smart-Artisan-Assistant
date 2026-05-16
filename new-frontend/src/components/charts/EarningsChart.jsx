import { LineChart } from "@mantine/charts";

function EarningsChart() {
  const data = [
    { month: "Jan", earnings: 4000 },
    { month: "Feb", earnings: 3000 },
    { month: "Mar", earnings: 5000 },
    { month: "Apr", earnings: 7000 },
  ];

  return (
    <LineChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: "earnings", label: "Earnings" }]}
    />
  );
}

export default EarningsChart;