import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/social-icons/google.png'
import github from '../../images/social-icons/github.png'

const SignUp = () => {
    const [state,setState]=useState({name:'',email:'',password:'',confirmPassword:''})
    const[agree,setAgree]=useState(false)
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const createNewUser=(e)=>{
        e.preventDefault()
        
    }

    return (
        <div className='w-5/6 mx-auto py-3 flex justify-center'>
            <div className=" lg:w-2/6 md:w-3/6 w-full p-6 rounded-lg shadow-lg bg-white ">
                <form onSubmit={createNewUser}>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputName" className="form-label inline-block mb-2 text-gray-700">Your name</label>
                        <input type="text" className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputName"
                            aria-describedby="nameHelp" placeholder="Enter Your Name" name='name' onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email" name='email' value={state.email} onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputPassword" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword"
                        placeholder="Password" name='password' value={state.password} onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
                        <input type="password" className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Password" name='confirmPassword' value={state.confirmPassword} onChange={handleChange} required/>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                    <div className="form-group form-check">
                        <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2" onChange={()=>setAgree(!agree)}/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                    </div>
                    </div>
                    <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-pink-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-pink-700 hover:shadow-lg
                    focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-pink-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out" disabled={agree?false:true}>Sign Up</button>
                    <p className="text-gray-800 mt-6 text-center">Have already an Account? <Link to={'/login'}
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
                    </p>
                </form>
                <div className='flex items-center'>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
                    <p className='mx-1'>Or</p>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
                </div>
                <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center mb-2'><img src={google} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]' />Continue with Google</button>
                <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center'><img src={github} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]' />Continue with Github</button>
           </div>
        </div>
    );
};

export default SignUp;