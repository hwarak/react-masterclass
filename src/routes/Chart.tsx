import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { Helmet } from "react-helmet";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  return <div>{isLoading ? "Loading Chart..." : <ApexChart type="line"
    series={[
      {
        name: "Price",
        data: data!.map((price) => price.close),
      },
    ]}
    options={{
      theme: {
        mode:"dark"
      },
    chart: {
      height: 500,
      width: 500,
      toolbar: {
        show: false,
      },
      background: "transparent",
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
        type:"datetime",
        categories: data?.map((price) => price.time_close),
        
      }, fill: {
        type: "gradient",
        gradient:{gradientToColors:["#0be881"], stops:[0, 100]}
      },
      colors: ["#0fbcf9"],
      tooltip: {
        y: {
            formatter: (value) => `$${value.toFixed(2)}`,
          },
      },
  }} /> }</div>;
}
  
  export default Chart;