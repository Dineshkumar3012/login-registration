import '../login/Login.css'
import '../table/Table.css'
import {useForm} from "react-hook-form"
import React, { useState } from 'react'


function Table(){
    const Data = [
       
    ]
    const [List , setList] = useState(Data)
    return( 
        <div>
            <Login setList={setList}/>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {
                List.map((e)=>{
                    return(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.password}</td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </tr>
                )})
            }
            </table>
        </div>
    )
}





function Login({setList}){ 
    const {register,handleSubmit,formState:{errors}} = useForm();

    // console.log(errors)
    function Random(){
        return (
           parseInt( Math.random()*1000000000)
        )
    }
   function handleSubmit1(e){
        // e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log(name,password,email)

    
        const listData = {
            id:Random(),
            name,
            email,
            password
        }

        setList((PrevList)=>{
            return PrevList.concat(listData)
        })
    }
    handleSubmit1()
    return(
        <div>
            <section className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col6">
                            <div className="form-sec">
                            <form onSubmit={handleSubmit()}>
                                <h2>Login</h2>
                                <input type="text" id="name1" {...register("name",{required:"Name is required"})}  placeholder="Enter the name"  />
                                {errors.name && <span>{errors.name.message}</span>}
                                <input type="email" id="email1" {...register("email",{required:"Name is required"})} placeholder="Enter the Email" />
                                {errors.email && <span>{errors.name.message}</span>}

                                <input type="password" {...register("password",{required:"Name is required"})}  id="password1" placeholder="Enter the password" />
                                {errors.password && <span>{errors.name.message}</span>}

                                <button className='forget-sec'>forget password ?</button>
                                <div className='flex'>
                                    <button type="submit">Login</button>
                                    <a href='#' className='alink'>Sign Up</a>
                                </div>
                             </form>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Table;