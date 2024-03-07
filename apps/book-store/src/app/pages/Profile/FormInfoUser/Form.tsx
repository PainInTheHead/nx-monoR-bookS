import { StyledFormChange } from './form.styled';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { MouseEventHandler } from 'react';
import { FormInput } from '@book-store/BookStoreLibrary';
import type { MouseEvent } from 'react';
import axios from 'axios';
import { FormTypes, IFormInput } from './../../Types/types';
import { useAppSelector, useAppDispatch } from '../../../hooks/hookStore';
import {
  actionChangeInfo,
  actionChangePass,
} from '../../../store/slices/userSlice';

const schema = z
  .object({
    Email: z.string().email({ message: 'Incorrect email address' }),
    Password: z
      .string()
      .min(8, { message: 'Minimum password length 8 characters' }),
    ConfirmPassword: z
      .string()
      .min(8, { message: 'Minimum password length 8 characters' }),
    UserName: z.string(),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ['ConfirmPassword'],
  });

const FormChangeProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [showPassword, setShowPassword] = useState(true);
  const [oldPassword, setOldPassword] = useState('12345678');
  const [oldEmail, setOldEmail] = useState(user.email);
  const [oldNameUser, setOldNameUser] = useState(user.username);
  const [showChangeInputs, setShowChangeInputs] = useState<
    'info' | 'pass' | ''
  >('');

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const emailValue = watch('Email');
  const passValue = watch('Password');
  const confirmValue = watch('ConfirmPassword');
  const userValue = watch('UserName');

  useEffect(() => {
    setOldEmail(user.email);
    setOldNameUser(user.username);
    setValue('Email', user.email);
    setValue('UserName', user.username);
  }, [user]);

  const handleClearHolderLog = (
    event: MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => {
    event.preventDefault();
    if (name === 'Email') {
      //  event.preventDefault();
      return reset({
        Email: '',
        UserName: userValue,
      });
    } else if (name === 'ConfirmPassword') {
      return reset({
        ConfirmPassword: '',
      });
    } else if (name === 'UserName') {
      return reset({
        UserName: '',
        Email: emailValue,
      });
    }
    // return reset({
    //   Password: '',
    //   Email: emailValue,
    //   ConfirmPassword: confirmValue,
    // });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (showChangeInputs === 'info') {
      setOldEmail(data.Email);
      data.UserName && setOldNameUser(data.UserName);
      setValue('Password', '');
      setValue('ConfirmPassword', '');
      if (!data.UserName || !data.Email) {
        return;
      }
      dispatch(actionChangeInfo(data.Email, data.UserName));
      console.log({ Email: data.Email, UserName: data.UserName });
    } else if (showChangeInputs === 'pass') {
      setValue('Password', data.Password);
      dispatch(actionChangePass(data.Password));
      console.log(data.Password);
    }
    setShowChangeInputs('');
  };

  const clickMouseSubmit = () => {
    if (showChangeInputs === 'info') {
      setValue('Password', oldPassword);
      setValue('ConfirmPassword', oldPassword);
      // data.Password = oldPassword;
      // data.ConfirmPassword = oldPassword;
    }
    handleSubmit(onSubmit);
  };

  const handleChangePass = (e: React.MouseEvent, name: '' | 'pass') => {
    e.preventDefault();
    if (!showChangeInputs) {
      return setShowChangeInputs('pass');
    }
    return setShowChangeInputs('');
  };

  const handleChangeInfo = (e: React.MouseEvent, name: '' | 'info') => {
    e.preventDefault();
    if (!showChangeInputs) {
      return setShowChangeInputs('info');
    }
    return (
      setValue('Email', user.email),
      setValue('UserName', user.username),
      setShowChangeInputs('')
    );
  };

  return (
    <StyledFormChange>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="conteiner">
          <div className="pers-info-header">
            <h1>Personal information</h1>
            <button
              className="ChangeInformation"
              onClick={(e) => handleChangeInfo(e, 'info')}
            >
              Change information
            </button>
          </div>
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={userValue}
            name={'UserName'}
            itsProfile={showChangeInputs === 'info' ? false : true}
            inputValue={userValue}
            set={setOldNameUser}
          />

          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={emailValue}
            name={'Email'}
            error={errors.Email}
            errors={errors}
            itsProfile={showChangeInputs === 'info' ? false : true}
            inputValue={emailValue}
            set={setOldEmail}
          />

          <div className="pers-info-header">
            <h1>Password</h1>
            <button
              onClick={(e) => handleChangePass(e, 'pass')}
              className="ChangeInformation"
            >
              Change password
            </button>
          </div>

          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={passValue}
            name={'oldPassword'}
            // handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
            itsProfile={true}
            inputValue={oldPassword}
          />

          {showChangeInputs === 'pass' && (
            <>
              <div className={errors.Password && 'password'}>
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
                <span className="label-pass">Enter your password</span>
              </div>
              <div className={errors.ConfirmPassword && 'password'}>
                <FormInput
                  register={register}
                  handleClearHolderLog={handleClearHolderLog}
                  Value={confirmValue}
                  name={'ConfirmPassword'}
                  error={errors.ConfirmPassword}
                  errors={errors}
                  handleTogglePassword={handleTogglePassword}
                  showPassword={showPassword}
                />
                <span className="label-pass">
                  Repeat your password without errors
                </span>
              </div>
            </>
          )}
        </div>
        {showChangeInputs && (
          <button className="btn-confirm" onClick={clickMouseSubmit}>
            Confirm
          </button>
        )}
      </form>
    </StyledFormChange>
  );
};

export default FormChangeProfile;
