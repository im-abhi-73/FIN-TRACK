import React, { Component } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

class CustomPieChart extends Component {
  render() {
    const { data = [], label, totalAmount, colors = [], showTextAnchar = false } = this.props;

    return (
      <div className="w-full h-96 relative">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}   // Bigger pie
              innerRadius={65}    // Thicker donut
              paddingAngle={5}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={true}
              label={
                showTextAnchar
                  ? ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`
                  : false
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {totalAmount && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-lg font-medium text-gray-500">{label}</p>
            <p className="text-2xl font-bold">{totalAmount}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CustomPieChart;


// import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

// const CustomPieChart = ({ data = [], label, totalAmount, colors = [], showTextAnchar = false }) => {
//   return (
//     <div className="w-full h-64 relative">
//       <ResponsiveContainer>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             innerRadius={40}
//             paddingAngle={2}
//             label={showTextAnchar ? ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%` : false}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//             ))}
//           </Pie>
//           <Tooltip formatter={(value) => `₹${value}`} />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//       {totalAmount && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <p className="text-sm">{label}</p>
//           <p className="text-lg font-semibold">{totalAmount}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomPieChart;
