import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BsTwitter } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"


import './signin.css'
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';


export default function SignIn() {
    return (
        <section className='signIn__container'>
            <div className='singIn__wrapper'>
                <div className='cancel__icon'>
                    <RxCross2 />
                </div>
                <div className="twitter-icon-container">
                    <BsTwitter className="twitter-icon" />
                </div>

                <div className='all__info__fields'>
                    <div className='title__section'>
                        <p>Sign in to Twitter</p>
                    </div>

                    <div className='btn__container__google_and_apple'>
                        <button variant="contained" className='bticon'>
                            <FcGoogle />
                            <span className="icon-text">Sign in with Google</span>
                        </button>
                        <button variant="contained" className='bticon'>
                            <AiFillApple />
                            <span className="icon-text">Sign in with Apple</span>
                        </button>
                    </div>

                    <div className="or__container">
                        <hr className="hrIS me-3" />
                        <p>or</p>
                        <hr className="hrIS ms-3" />
                    </div>

                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth 
                        type="email"
                        className="email-field"
                    />
                    
                    <button className='btn__next'>Next</button>
                    
                    <button className='btnpassword'>
                        <span>Forgot password?</span>
                    </button>

                    <p className='text_center'>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
                </div>

            </div>


        </section>
    )
}