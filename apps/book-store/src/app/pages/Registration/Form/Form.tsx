import { StyledRegInForm } from './form.styled';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPass } from '@book-store/BookStoreLibrary';
import type { MouseEventHandler } from 'react';
import axios from 'axios';
import { FormInput } from '@book-store/BookStoreLibrary';
import type { MouseEvent } from 'react';
import { FormTypes, IFormInput } from './../../Types/types';

const schema = z
  .object({
    Email: z.string().email({ message: 'Incorrect email address' }),
    Password: z
      .string()
      .min(8, { message: 'Minimum password length 8 characters' }),
    ConfirmPassword: z
      .string()
      .min(8, { message: 'Minimum password length 8 characters' }),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ['ConfirmPassword'],
  });

const RegForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const emailValue = watch('Email');
  const passValue = watch('Password');
  const confirmValue = watch('ConfirmPassword');

  const handleClearHolderLog = (
    event: MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => {
    if (name === 'Email') {
      //  event.preventDefault();
      return reset({
        Email: '',
        Password: passValue,
        ConfirmPassword: confirmValue,
      });
    } else if (name === 'ConfirmPassword') {
      return reset({
        ConfirmPassword: '',
        Password: passValue,
        Email: emailValue,
      });
    }
    return reset({
      Password: '',
      Email: emailValue,
      ConfirmPassword: confirmValue,
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    // const response = await axios.post(
    //   `http://localhost:3002/user/registration`,
    //   {
    //     email: data.Email,
    //     password: data.Password,
    //   }
    // );
    // if (!response) {
    //   return alert("Try again :(");
    // }
    // return router.push("/authorization/login");
  };

  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <StyledRegInForm>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="email">
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={emailValue}
            name={'Email'}
            error={errors.Email}
            errors={errors}
          />
          <label className="label" htmlFor="email">
            Enter your email
          </label>
        </div>

        <div className="password">
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={passValue}
            name={'Password'}
            error={errors.Password}
            errors={errors}
            handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
          />

          <label className="label" htmlFor="password">
            Enter your password
          </label>
        </div>

        <div className="password">
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={passValue}
            name={'ConfirmPassword'}
            error={errors.ConfirmPassword}
            errors={errors}
            handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
          />
          <label className="label" htmlFor="confirmPassword">
            Repeat your password without errors
          </label>
        </div>
        <button className={`btn-form`} type="submit">
          Sign Up
        </button>
      </form>
    </StyledRegInForm>
  );
};

export default RegForm;
