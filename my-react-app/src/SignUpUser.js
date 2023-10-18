import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './SignUpUser.css';

function SignUpUser() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const { password, confirmPassword, ...formData } = data;
    if (password === confirmPassword) {
      alert('Form data submitted: ' + JSON.stringify(formData));
      console.log('Form data object:', formData);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <div>
        <label>First Name</label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p>First Name is required</p>}
      </div>

      <div>
        <label>Last Name</label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <p>Last Name is required</p>}
      </div>

      <div>
        <label>Username</label>
        <Controller
          name="userName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.userName && <p>Username is required</p>}
      </div>

      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <p>Email is required and should be in a valid format</p>}
      </div>

      <div>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && <p>Password is required</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.confirmPassword && <p>Passwords do not match</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpUser;
