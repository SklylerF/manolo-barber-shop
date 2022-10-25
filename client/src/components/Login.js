import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Navbar from "./navbar/Navbar";
import Auth from "../utils/auth";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: {
          ...formState,
        },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className='Auth-form-container'>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <form className='Auth-form' onSubmit={handleFormSubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className='text-center'>
            Not registered yet?{" "}
            <Link to='/signup'>
              <span id='sign-up' className='link-primary'>
                Sign Up
              </span>
            </Link>
          </div>
          <div className='form-group mt-3'>
            <label>Email address</label>
            <input type='email' className='form-control mt-1' placeholder='Enter email' value={formState.email} onChange={handleChange} />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input type='password' className='form-control mt-1' placeholder='Enter password' value={formState.password} onChange={handleChange} />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button id='btn' type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          <p className='text-center mt-2'>
            Forgot <a href='#'>password?</a>
          </p>
        </div>
      </form>
      <div>{error && error.message}</div>
    </div>
  );
}
/* sign up  */
