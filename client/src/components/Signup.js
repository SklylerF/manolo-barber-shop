import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Navbar from "./navbar/Navbar";

import Auth from "../utils/auth";

export default function SignUp() {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='Auth-form-container'>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      {data ? (
        <h2>
          You Are Logged In! <Link to='/'>CLICK ME TO GO BACK TO THE HOMEPAGE</Link>
        </h2>
      ) : (
        <form className='Auth-form' onSubmit={handleFormSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Sign Up</h3>
            <div className='text-center'>
              Already registered?{" "}
              <Link to='/login'>
                <span className='link-primary'>Sign In</span>
              </Link>
            </div>
            <div className='form-group mt-3'>
              <label>Full Name</label>
              <input
                type='text'
                className='form-control mt-1'
                name='name'
                placeholder='e.g Jane Doe'
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-3'>
              <label>Username</label>
              <input
                type='text'
                className='form-control mt-1'
                name='username'
                placeholder='Username'
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-3'>
              <label>Email address</label>
              <input
                type='email'
                className='form-control mt-1'
                name='email'
                placeholder='Email Address'
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-3'>
              <label>Password</label>
              <input
                type='password'
                className='form-control mt-1'
                name='password'
                placeholder='Password'
                value={formState.password}
                onChange={handleChange}
              />
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
          {error && (
            <div>
              <h2>Sorry, Something Went Wrong, Please Try Again at a Later Time</h2>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
