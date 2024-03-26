import { StyledLogInForm } from './form.styled';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { MouseEventHandler } from 'react';
import { CustomButton, FormInput } from '@book-store/BookStoreLibrary';
import { FormTypes, IFormInput } from './../../Types/types';
import { useAppDispatch } from '../../../hooks/hookStore';
import { actionLoginUser } from '../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  Email: z.string().email({ message: 'Incorrect email address' }),
  Password: z
    .string()
    .min(8, { message: 'Minimum password length 8 characters' }),
});

const LoginForm = () => {
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

  const handleClearHolderLog = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => {
    if (name === 'Email') {
      return reset({ Email: '', Password: passValue });
    }
    return reset({ Password: '', Email: emailValue });
  };

const navigateFunction = (path: string) => {
  navigate(path);
};


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { Email, Password } = data;
    dispatch(actionLoginUser(Email, Password, navigateFunction));
  };

  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSubmit(onSubmit)(); 
    }
  };

  return (
    <StyledLogInForm>
      <h1 className={`h1-login-form`}>Log In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`login-form`}
        onKeyDown={handleKeyDown}
      >
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
        <CustomButton
          color=" #344966"
          text="Log In"
          type="submit"
          width="151px"
        />
      </form>
    </StyledLogInForm>
  );
};

export default LoginForm;
