import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
} from "recharts";

export default function Charts() {
  const chart = [
    {
      name: "Jan",
      revenue: 3000,
      cost: 2500,
    },
    {
      name: "Feb",
      revenue: 4000,
      cost: 1500,
    },
    {
      name: "Mar",
      revenue: 3000,
      cost: 6800,
    },
    {
      name: "Apr",
      revenue: 2780,
      cost: 3908,
    },
    {
      name: "May",
      revenue: 1890,
      cost: 4800,
    },
    {
      name: "Jun",
      revenue: 2390,
      cost: 3800,
    },
    {
      name: "Jul",
      revenue: 3490,
      cost: 4300,
    },
  ];

  return (
    <>
      {" "}
      <div className="dashboard-chart">
        <div className="card">
          <div className="card-header">Ads Spends & Returns</div>
          <div className="card-body chart-background">
            <ComposedChart
              width={400}
              height={250}
              data={chart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {" "}
              <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis yAxisId="left" fontSize={10} />
              <YAxis yAxisId="right" orientation="right" fontSize={10} />
              <Tooltip wrapperStyle={{ fontSize: 12 }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#48aaad"
                activeDot={{ r: 8 }}
              />
              <Bar yAxisId="right" dataKey="cost" fill="#0492c2" barSize={20} />
            </ComposedChart>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Click Through Rates & Invoices</div>
          <div className="card-body chart-background">
            <ComposedChart
              width={400}
              height={250}
              data={chart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {" "}
              <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis yAxisId="left" fontSize={10} />
              <YAxis yAxisId="right" orientation="right" fontSize={10} />
              <Tooltip wrapperStyle={{ fontSize: 12 }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#016064"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="cost"
                stroke="#63c5da"
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Conversion Rates & Order </div>
          <div className="card-body chart-background">
            <ComposedChart
              width={400}
              height={250}
              data={chart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {" "}
              <Legend wrapperStyle={{ fontSize: 12 }} verticalAlign="top" />
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis yAxisId="left" fontSize={10} />
              <YAxis yAxisId="right" orientation="right" fontSize={10} />
              <Tooltip wrapperStyle={{ fontSize: 12 }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#1338be"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="cost"
                stroke="#1f456e"
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </div>
        </div>
      </div>
    </>
  );
}
