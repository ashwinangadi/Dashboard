import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {LineChart} from './LineChart'
import { PieChart } from './PieChart'
import { CategoryScale } from "chart.js";
import { Data } from '../dummy-API/Data'
import Chart from "chart.js/auto";
import { Menu } from './Menu'
import { Highlight } from './Highlights'
import { TopBar } from './TopBar'
import right from '../assets/right.png'

export const Dashboard = () => {

    
    const { user } = UserAuth();
    const navigate = useNavigate();
    Chart.register(CategoryScale);

    
    
    useEffect((()=>{
        if(user == null){
            navigate('/')
            
        }
    }),[user])

    const [chartData1, setChartData1] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "rgb(255, 205, 86)",
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
              "#2a71d0",
              "#06d6a0",
              "#f72585"

            ],
            borderColor: "#E9A0A0",
            borderWidth: 3,
            lineTension: 0.5,
            pointRadius: 0,
          }
        ]
      });

      const [chartData2, setChartData2] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "rgb(255, 205, 86)",
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
              "#2a71d0",
              "#06d6a0",
              "#f72585"

            ],
            borderColor: "black",
            borderWidth: 0,
            
          }
        ]
      });

    return(

        <section className='container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center lg:items-start lg:my-10'>
            <Menu/>
            <div className='h-screen w-screen max-w-[1000px] lg:me-[40px] mx-10'>   

                <TopBar/>
                <Highlight/>

                <div className='bg-white h-[359px]  my-10 rounded-[20px]'>
                    <LineChart  chartData={chartData1} />
                </div>

                <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 '>

                    <div className='bg-white h-[256px] md:w-[480px] rounded-[20px]'><PieChart chartData={chartData2} /></div>

                    <div className='bg-white h-[256px] md:w-[480px] rounded-[20px] ps-[40px] pt-[30px] pe-[30px]'>
                        <span className='flex items-center justify-between'>
                            <h1 className='font-bold font-mont text-[18px]'>Today&apos;s schedule</h1>
                            <p className='flex justify-center items-center font-normal font-mont text-[12px] text-[#858585]'>
                                See All 
                                <img className='ms-[6px]' src={right} alt="" />
                            </p>
                        </span>
                        <div className=' border-l-[5px] border-[#9BDD7C] ps-[15px] mt-[25px]'>
                            <h1 className='text-[#666666] font-bold font-lato text-[14px]'>Meeting with suppliers from Kuta Bali</h1>
                            <h2 className='text-[#999999] font-normal font-lato text-[12px]'>14.00-15.00</h2>
                            <h2 className='text-[#999999] font-normal font-lato text-[12px]'>at Sunset Road, Kuta, Bali </h2>
                        </div>
                        <div className=' border-l-[5px] border-[#6972C3] ps-[15px] mt-[13px]'>
                            <h1 className='text-[#666666] font-bold font-lato text-[14px]'>Check operation at Giga Factory 1</h1>
                            <h2 className='text-[#999999] font-normal font-lato text-[12px]'>18.00-20.00</h2>
                            <h2 className='text-[#999999] font-normal font-lato text-[12px]'>at Central Jakarta</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    ) 
}