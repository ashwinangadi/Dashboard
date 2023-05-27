import TT from '../assets/total_transactions_icon.png'
import people from '../assets/people.png'
import up from '../assets/up.png'
import revenue from '../assets/revenue.png'
import { Data } from '../dummy-API/Data'

export const Highlight = () => {
    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[10px] lg:gap-[38.5px] mt-[28px] w-screen max-w-[1000px] overflow-x-auto">
                    <div className="h-[120px] lg:w-[221px] bg-[#DDEFE0] rounded-[20px]">
                        <img className='ml-auto pt-[20px] me-[25.65px]  ' src={revenue} alt="" />
                        <p className='ms-[25px] mb-[5px] font-normal font-lato text-sm'>Higest users ever gained</p>
                        <data className="money ms-[25px] font-bold font-open text-2xl" value="2129430">{Data[3].userGain}</data>
                    </div>
                    <div className="h-[120px] lg:w-[221px] bg-[#F4ECDD] rounded-[20px]">
                        <img className='ml-auto pt-[20px] me-[25.65px]  ' src={TT} alt="" />
                        <p className='ms-[25px] mb-[5px] font-normal font-lato text-sm'>Year of Lowest Users</p>
                        <data className="money ms-[25px] font-bold font-open text-2xl" value="2129430">{Data[4].year}</data>
                    </div>
                    <div className="h-[120px] lg:w-[221px] bg-[#EFDADA] rounded-[20px]">
                        <img className='ml-auto pt-[20px] me-[25.65px]  ' src={up} alt="" />
                        <p className='ms-[25px] mb-[5px] font-normal font-lato text-sm'>Year of Highest Users</p>
                        <data className="money ms-[25px] font-bold font-open text-2xl" value="2129430">{Data[6].year}</data>
                    </div>
                    <div className="h-[120px] lg:w-[221px] bg-[#DEE0EF] rounded-[20px]">
                        <img className='ml-auto pt-[20px] me-[25.65px]  ' src={people} alt="" />
                        <p className='ms-[25px] mb-[5px] font-normal font-lato text-sm'>Total current Users</p>
                        <data className="money ms-[25px] font-bold font-open text-2xl" value="2129430">{Data[6].userGain}</data>
                    </div>
                </div>
        </>
    )
}