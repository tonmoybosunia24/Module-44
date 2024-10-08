import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

       const studentData = [
              { id: 1, student: "Alice", marks: { math: 78, physics: 82, chemistry: 75 } },
              { id: 2, student: "Bob", marks: { math: 85, physics: 90, chemistry: 88 } },
              { id: 3, student: "Charlie", marks: { math: 92, physics: 95, chemistry: 94 } },
              { id: 4, student: "David", marks: { math: 88, physics: 87, chemistry: 86 } },
              { id: 5, student: "Eva", marks: { math: 74, physics: 78, chemistry: 72 } },
              { id: 6, student: "Frank", marks: { math: 90, physics: 93, chemistry: 89 } },
              { id: 7, student: "Grace", marks: { math: 95, physics: 97, chemistry: 96 } },
              { id: 8, student: "Hannah", marks: { math: 81, physics: 85, chemistry: 80 } },
              { id: 9, student: "Ian", marks: { math: 87, physics: 88, chemistry: 84 } },
              { id: 10, student: "Judy", marks: { math: 83, physics: 81, chemistry: 85 } }
       ];

       return (
              <div>
                     <LChart width={600} height={400} data={studentData}>
                     <XAxis dataKey="student"></XAxis>
                     <YAxis></YAxis>
                     <Line dataKey="marks.math" stroke="#8884d8"/>
                     <Line dataKey="marks.physics" stroke="red"/>
                     <Line dataKey="marks.chemistry" stroke="green"/>
                     </LChart>
              </div>
       );
};

export default LineChart;