
import { Line } from "react-chartjs-2";

export  const  LineChart = ({ chartData }) => {
  return (
    <div className="h-[320px] ">
    <h2 className="text-left font-bold font-mont text-[18px] ms-5 pt-2">Activities</h2>
      <Line
        data={chartData}
        options={{
            scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: true
                  }
                }
              },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
            title: {
              display: true,
              text: "     2016-2022",
              align: "start",
              position: "top",
              font: {
                size: 14,
                }
            },
            legend: {
              display: true,
              align: "end",
              labels: {
                usePointStyle: true,
                boxWidth: 6,
                padding: 15,
                pointStyleWidth: 18,
                font: {
                    size: 14
                }
                
              }
            },
            
          }
        }}
      />
    </div>
  );
}
