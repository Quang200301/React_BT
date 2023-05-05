import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
function Login(){
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [validationMsg,setvalidationMsg]=useState('');

    const validateAll=()=>{
        const msg={}
            if(isEmpty(email)){
                msg.email="Please input Email"
            }else if(!isEmail(email)){
                msg.email="your email incorrect"
            }
            if(isEmpty(pass)){
                msg.pass="Please input Pass"
            }
            setvalidationMsg(msg)
            if(Object.keys(msg).length>0)return false
            return true
        
    }
    const onSubmitLogin=()=>{
        const isvalid=validateAll()
        if(!isvalid) return
        alert("successfully") 
    }
    return(
        <div>
            <form >
                Email:<br></br>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your email"/><br></br>
                <p className="text-red-400 text-xs italic">{validationMsg.email}</p>
                Pass:<br></br>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="******"/><br></br>
                <p className="text-red-400 text-xs italic">{validationMsg.pass}</p><br></br>
                <button type="button" onClick={onSubmitLogin}>Login</button>
            </form>
        </div>
    )

}
export default Login;