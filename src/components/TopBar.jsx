import bell from '../assets/bell.png'
import search from '../assets/Search icon.png'
import image from '../assets/image 1.png'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

export const TopBar = () => {
    const [signOut, setSignOut] = useState(false)
    const { user, logOut } = UserAuth();

    const handleSignOut = async() =>{
        try{
            await logOut()
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
        <div className="flex flex-col sm:flex-row justify-between items-center lg:mt-[10px]">
                    <h1 className='font-bold font-mont text-2xl'>Dashbord</h1>
                    <span className='flex items-center justify-center'>
                        <div className='flex items-center justify-cente bg-white w-[180px] h-[30px] pe-[15px] rounded-[10px]'>
                            <input type="search" className="min-w-0 ps-[15px] outline-none font-lato font-normal text-[14px]" placeholder="Search..." />
                            <img className='' src={search} alt="" />
                        </div>
                        <img className='mx-10' src={bell} alt="" />
                        <img className="h-[51px] w-[52px] rounded-full" src={image} alt="profile-picture" onClick={()=> !signOut ? setSignOut(true): setSignOut(false)} />
                        
                    </span>
                    
                </div>
                <div className={`flex justify-end ${!signOut && "hidden"}`} >
                    <div className='absolute p-3 bg-white rounded-xl cursor-pointer' onClick={()=>{handleSignOut(); console.log(user)}}>SignOut</div>
                </div>
        </>
    )
}