import React from 'react'
import TextInput from './TextInput'
import CheckBox from './CheckBox'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom';
import Form from './Form'
import { useState } from 'react/cjs/react.development';
import { useAuth } from '../contexts/AuthContext';

export default function SignupForm() {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();


    async function handleSubmit(e){
        e.preventDefault()

        if (password !== confirmPassword){
            
            return setError("Password don't macth")
        }

        try{
            setError("");
            setLoading(true);
            await signup(email,password,username);
            navigate.push("/");

        } catch(err){
            // console.log(err);
            setLoading(false);
            setError("Faild to create an account!");
        }

        
    }

    return (
        <Form className={{height: '500px'}} onSubmit={handleSubmit} >
                    
        <TextInput type="text" placeholder="Enter Name" icon="person" required value={username} onChange={(e)=> setUserName(e.target.value)} />
        
        <TextInput type="email" placeholder="Enter Email" icon="alternate_email"  value={email} onChange={(e)=> setEmail(e.target.value)} required />

        <TextInput type="password" placeholder="Enter Password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)} required />
        
        <TextInput type="password" placeholder="Confirm password"icon="lock_clock" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required />

       <CheckBox text="I agree to the Terms &amp; Conditions"value={agree} onChange={(e)=> setAgree(e.target.value)} required />
    
       <Button disabled={loading} type="submit"> <span>Submit now </span></Button>

       {error && <p className="error">{error}</p>}

       <div className="info">Already have an account? <Link to="/login">Login</Link> instead.</div>
        
</Form>
    )
}
