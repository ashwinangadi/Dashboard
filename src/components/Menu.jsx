import dashbord_icon from '../assets/dashboard_icon.png'
import transact from '../assets/transaction_icon.png'
import schedule from '../assets/schedule_icon.png'
import user_icon from '../assets/user_icon.png'
import settings from '../assets/setting_icon.png'
import { useState } from 'react'

export const Menu = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='hidden lg:block'>
                <div className={` bg-[#000000] w-screen lg:h-[944px] lg:max-w-[280px] ms-10 me-10 rounded-[30px] text-white ps-[50px] flex flex-col justify-between `}>
                    <span>
                        <h1 className='mt-[60px] font-mont font-bold text-4xl'>Board.</h1>
                        <ul className='mt-[60px] space-y-[40px] font-mont text-[18px] '>
                            <li><img className='inline' src={dashbord_icon} alt="" /><span className='font-bold ps-[20px]'>Dashboard</span> </li>
                            <li><img className='inline' src={transact} alt="" /><span className='font-normal ps-[20px]'>Transaction</span> </li>
                            <li><img className='inline' src={schedule} alt="" /><span className='font-normal ps-[20px]'>Schedules</span> </li>
                            <li><img className='inline' src={user_icon} alt="" /><span className='font-normal ps-[20px]'>Users</span> </li>
                            <li><img className='inline' src={settings} alt="" /><span className='font-normal ps-[20px]'>Settings</span> </li>
                        </ul>
                    </span>
                    <ul className='mb-[60px] space-y-[20px] font-mont text-[14px]'>
                        <li>Help</li>
                        <li>Contact Us</li>  
                    </ul>  
                </div>
            </div>
            <div className={`bg-[#000000] h-24 w-screen mb-10 ms-10 me-10 text-white lg:hidden flex items-center justify-between z-10`}>
                <p className=' font-mont font-bold text-4xl ps-[50px]'>Board.</p>
                <div className='flex items-center h-16 w-16 justify-center text-white me-[30px]' onClick={()=>{nav==true? setNav(false): setNav(true);}}>
                {!nav ? (
                    <svg className="ham hamRotate ham1 "  viewBox="0 0 100 100" width="80">
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -npm run dev13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                            className="line middle"
                            d="m 30,50 h 40" />
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                    ) : (
                    <svg className={`${nav && "active"} ham hamRotate ham1`} viewBox="0 0 100 100" width="80" >
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                            className="line middle"
                            d="m 30,50 h 40" />
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                    )}
                </div>
            </div>
            <div className={`absolute flex flex-col items-center justify-between bg-[#000000] lg:hidden h-screen w-[50%] right-0 top-0 shadow-2xl  ${!nav && 'hidden '}`}>
                <ul className='flex flex-col justify-center items-start text-white space-y-[40px] mt-36 font-mont text-[18px]'  >
                    <li><img className='inline' src={dashbord_icon} alt="" /><span className='font-bold ps-[20px]'>Dashboard</span> </li>
                    <li><img className='inline' src={transact} alt="" /><span className='font-normal ps-[20px]'>Transaction</span> </li>
                    <li><img className='inline' src={schedule} alt="" /><span className='font-normal ps-[20px]'>Schedules</span> </li>
                    <li><img className='inline' src={user_icon} alt="" /><span className='font-normal ps-[20px]'>Users</span> </li>
                    <li><img className='inline' src={settings} alt="" /><span className='font-normal ps-[20px]'>Settings</span> </li>      
                </ul>
                <ul className='mb-[60px] space-y-[20px] font-mont text-[14px] text-white'>
                    <li>Help</li>
                    <li>Contact Us</li>  
                </ul>
            
            </div>
        </>    
    )
}