"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    change24h: 100,
    change1h: 10,
    date: '2023-01-01',
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    change24h: 200,
    change1h: 20,
    date: '2023-01-02',
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    change24h: 300,
    change1h: 30,
    date: '2023-01-03',
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    change24h: 400,
    change1h: 40,
    date: '2023-01-04',
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    change24h: 500,
    change1h: 50,
    date: '2023-01-05',
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    change24h: 600,
    change1h: 60,
    date: '2023-01-06',
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    change24h: 700,
    change1h: 70,
    date: '2023-01-07',
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date : ${payload[0].payload.date}`}</p>
        <p className="label">{`Price : ${payload[0].value}`}</p>
        {payload[1] && <p className="label">{`Change 24h : ${payload[1].value}`}</p>}
        {payload[2] && <p className="label">{`Change 1h : ${payload[2].value}`}</p>}
      </div>
    );
  }

  return null;
};

const Chart = ({graphData}) => {
    return ( 
        <AreaChart
        width={1380}
        height={400}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="Price" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="change24h" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="change1h" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
     );
}
 
export default Chart;