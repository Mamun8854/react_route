import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statics = () => {
  const quizTopics = useLoaderData();
  const { data } = quizTopics;
  const info = data[0];
  // const { total, name } = info;

  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="bg-slate-200 w-11/12 mx-auto text-center rounded">
        <h1 className="text-2xl mb-8 font-bold py-4">
          Total Quiz <span className="text-yellow-500">Static</span>
        </h1>
      </div>
      <div className="bg-slate-300 w-11/12 mx-auto rounded flex justify-center py-4">
        <LineChart
          width={350}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </div>
    </section>
  );
};

export default Statics;
