
import { Pie } from "react-chartjs-2";

export  const PieChart = ({ chartData }) => {
  return (
    <div className="h-[200px] w-full ">
        <span className="flex justify-between items-center ms-[40px] pt-[30px] me-[43px]"><h2 className=" text-left font-bold font-mont text-[18px] ">Top Users</h2><p className="font-normal font-mont text-12px">2016-2022</p></span>
      
      <Pie
        data={chartData}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 6,
                        padding: 10,
                        pointStyleWidth: 18,
                        font: {
                            size: 14
                        }
                      }
                },
                elements: {
                    arc: {
                        borderWidth: 0,   
                    }
                }
            }
        }}
      />
    </div>
  );
}
