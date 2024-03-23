import { StyledRegInForm } from './form.styled';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { MouseEventHandler } from 'react';
import { FormInput } from '@book-store/BookStoreLibrary';
import type { MouseEvent } from 'react';
import { FormTypes, IFormInput } from './../../Types/types';
import { useAppDispatch } from '../../../hooks/hookStore';
import { actionRegistrationUser } from '../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
    } else if (name === 'Password') {
      return reset({
        Password: '',
        Email: emailValue,
        ConfirmPassword: confirmValue,
      });
    }
  };

  const navigateFunction = (path: string) => {
    navigate(path);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    dispatch(
      actionRegistrationUser(data.Email, data.Password, navigateFunction)
    );
  };

  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConf, setShowPasswordConf] = useState(true);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConf: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    setShowPasswordConf(!showPasswordConf);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <StyledRegInForm>
      <h1 className="h1-login-form">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
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
            Value={confirmValue}
            name={'ConfirmPassword'}
            error={errors.ConfirmPassword}
            errors={errors}
            handleTogglePassword={handleTogglePasswordConf}
            showPassword={showPasswordConf}
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
