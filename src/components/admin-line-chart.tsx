"use client";

import { useHomesData } from "@/hooks";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function AdminLineChart() {
  const { data, isFetching, isError } = useHomesData();

  const today = new Date();
  const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const processedData = data?.data
    ?.filter((item: any) => new Date(item.createdAt) > last7Days)
    .reduce((result: any, item: any) => {
      const date = new Date(item.createdAt).toISOString().split("T")[0];
      const avgEnergy = item.main.avg_Energy;

      if (!result[date]) {
        result[date] = { time: date, value: avgEnergy, count: 1 };
      } else {
        result[date].value += avgEnergy;
        result[date].count++;
      }

      return result;
    }, {});

  const dailyAverages = Object.values(processedData || {}).map(
    (entry: any) => ({
      time: entry.time,
      value: entry.value / entry.count,
    }),
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={400}
        data={dailyAverages}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
