import { Line } from "react-chartjs-2";

function DashboardChart({ chartData, info }) {
  return (
    <div className="border border-[#e8e8e8] p-6 rounded-md">
      <div className="flex justify-between">
        <p className="text-color-2 text-sm font-semibold">Total Penjualan</p>
        <input type="date" className="bg-[#e8e8e8] rounded-md p-[10px]" />
      </div>
      <p className="text-[#4f5665] text-xs font-medium">{info.sum && info.sum > 1 ? `${info.sum}Pcs` : `${info.sum}Pc`}</p>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DashboardChart;
