import google from '../assets/google-icon-1.png'
import apple from '../assets/apple-1.png'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Signin = () => {

    const { user, googleSignIn } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async ()=> {
        try{
            await googleSignIn()
        }catch (error){
            console.log(error)
        }
    }
    
    useEffect((()=>{
        if(user != null){
            navigate('/dashboard')
        }
    }),[user])
    return(
        <>
            <section className="md:flex">
                <div id="board" className=" h-32 md:h-screen w-full md:w-[588px] grid place-items-center text-7xl font-bold font-mont bg-[#000000] text-white ">
                    <h1>Board.</h1>
                </div>
                <div id="login" className=" h-screen w-full md:max-2xl:w-[852px]  md:pt-0 grid place-content-center bg-[#F5F5F5] ">
                    <span className=''>
                        <h1 className="text-start text-4xl font-bold font-mont">Sign In</h1>
                        <p className='font-normal text-base font-lato mt-[5px]'>Sign in to your account</p>
                    </span>
                    <span className='flex justify-center items-center space-x-3 md:space-x-6 mt-[26px]'>
                        <button className='flex justify-center items-center bg-[#FFFFFF] h-[30px] w-[170px] md:w-[180px] rounded-[10px] space-x-3' onClick={()=>handleGoogleSignIn()}>
                            <img className='w-[14px] h-[14px]' src={google} alt="google logo" />
                            <p className='text-[#858585] text-[12px] font-normal font-mont'>Sign in with Google</p>
                        </button>
                        <button className='flex justify-center items-center bg-[#FFFFFF] h-[30px] w-[150px] md:w-[180px] rounded-[10px] space-x-3'>
                            <img className='w-[11.5px] h-[14px]' src={apple} alt="apple logo" />
                            <p className='text-[#858585] text-[12px] font-normal font-mont'>Sign in with Apple</p>
                        </button> 
                    </span>
                    <span className='p-[30px] h-[317px] md:w-[385px] bg-white grid place-content-center rounded-[20px] mt-[25px]'>
                        <div className=''>
                            <p className='text-base font-normal font-lato'>Email address</p>
                            <input
                                className='bg-[#F5F5F5] h-[40px] w-[275px] md:w-[325px] rounded-[10px] ps-[15px] font-normal font-lato mt-[10px]'
                                type='Email'
                                placeholder='Enter Email Address'
                                onChange=""
                                name='email' 
                            />
                        </div>
                        <div className='mt-[20px]'>
                            <p className='text-base font-normal font-lato'>Password</p>
                            <input
                                className='bg-[#F5F5F5] h-[40px] w-[275px] md:w-[325px] rounded-[10px] ps-[15px] font-normal font-lato mt-[10px]'
                                type='password'
                                placeholder='Enter password'
                                onChange=""
                                name='password'
                            />
                        </div>
                        <p className='text-base font-normal font-lato text-[#346BD4] mt-[20px]'>Forgot password?</p>
                        <button className='bg-[#000000] text-white rounded-[10px] h-[40px] w-[275px] md:w-[325px] font-bold font-mont text-base mt-[20px]'>Sign In</button>
                    </span>
                    <p className='text-base font-normal text-[#858585] text-center font-lato mt-[20px]'>Don’t have an account? <span className='text-[#346BD4]'>Register here</span></p>
                </div>
            </section>
        </>
    )
}