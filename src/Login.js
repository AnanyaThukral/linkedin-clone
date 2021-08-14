import {React, useState} from 'react'
import styled from 'styled-components'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [profilePic, setProfilePic] = useState('')
const dispatch = useDispatch() //hook   

    const signIn =(e)=>{
       e.preventDefault()
    }

    const register = ()=>{
        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
        //then create a new user in the database
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            //then push the user to the redux data layer
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch(error=>alert(error))
    }

    return (
        <Container>
            <Image src="https://thetechjournal.com/wp-content/uploads/2013/06/linkedin.png"/>
            <Loginform>
                <input 
                value = {name} 
                onChange = {e=>setName(e.target.value)} 
                placeholder = 'Full name (required if registering)' 
                type="text" />

                <input 
                value = {profilePic}
                onChange = {e=>setProfilePic(e.target.value)}
                placeholder = "Profile pic URL (optional)"
                type="text" />

                <input 
                value = {email} 
                onChange = {e=> setEmail(e.target.value)} 
                placeholder = "Email" 
                type="email" />

                <input 
                value = {password} 
                onChange = {e=>setPassword(e.target.value)} 
                placeholder = "Password"
                type="password" />

                <button type="submit">Sign In</button>
            </Loginform>
            <p>Not a member?{(" ")}
                <span className = "login-register" onClick = {register}>Register Now</span>
            </p>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top:100px;
    padding-bottom: 100px;
    .login-register{
        color: #0177b7;
        cursor:pointer;
    }
    p{
        margin-top: 20px;
    }
`


const Image = styled.img`
    object-fit: contain;
    height:70px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Loginform = styled.form`
    display: flex;
    flex-direction: column;
    input{
        width: 350px;
        height: 50px;
        font-size: 20px;
        padding-left: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    button{
        width:365px;
        height: 50px;
        font-size: large;
        color: #fff;
        background-color: #0074b1;
        border-radius: 5px;
        cursor:pointer;
    }
`


