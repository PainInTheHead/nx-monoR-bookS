import { StyledinputProfile } from './input.styled';
import type { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form';
import ButtonPass from '../btnPass/ButtonPass';
import { FormTypes, IFormInput } from '../../Types/types';

// enum FormNamesEnum {
//   Email = "Email",
//   Password = "Password",
//   ConfirmPassword = "ConfirmPassword",
//   UserName = "UserName"
// }

interface ProrpsFormInput {
  register: UseFormRegister<IFormInput>;
  handleClearHolderLog: (
    event: React.MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => void;
  Value?: string;
  name: FormTypes;
  errors?: FieldErrors<IFormInput>;
  error?: FieldError;
  handleTogglePassword?: React.MouseEventHandler<HTMLButtonElement>;
  showPassword?: boolean;
  itsProfile?: boolean;
  inputValue?: string | null;
  set?: React.Dispatch<React.SetStateAction<string | null>>;
}

export function FormInput({
  register,
  handleClearHolderLog,
  Value,
  name,
  errors,
  error,
  handleTogglePassword,
  showPassword,
  itsProfile,
  inputValue,
  set,
}: ProrpsFormInput) {
  return (
    <StyledinputProfile className={`${error && `error-wrapper`}`}>
      {handleTogglePassword ? (
        <ButtonPass handleTogglePassword={handleTogglePassword} />
      ) : (
        <img
          className="img-inputform"
          src={`/login/${name}.svg`}
          width={24}
          height={24}
          alt={name}
        />
      )}
      {itsProfile ? (
        <input
          className="inputForm"
          placeholder={name}
          // id="email"
          type={showPassword ? 'password' : 'text'}
          value={inputValue ? inputValue : ''}
          readOnly
          {...register(name)}
        />
      ) : set ? (
        <input
          className="inputForm"
          placeholder={name}
          value={inputValue ? inputValue : ''}
          // id="email"
          type={showPassword ? 'password' : 'text'}
          {...register(name, {
            onChange: (e) => {
              set(e.target.value);
            },
          })}
        />
      ) : (
        <input
          className="inputForm"
          placeholder={name}
          // id="email"
          type={showPassword ? 'password' : 'text'}
          {...register(name)}
        />
      )}
      {Value && !itsProfile && (
        <button
          className="btn-close"
          onClick={(e) => handleClearHolderLog(e, name)}
        >
          <img src="/login/Close.svg" width={12} height={12} alt="close btn" />
        </button>
      )}
      {name === 'Email' ? (
        <span className={`valid ${!errors?.Email && `hidden`}`}>
          {errors?.Email && errors.Email.message}
        </span>
      ) : name === 'Password' ? (
        <span className={`valid ${!errors?.Password && `hidden`}`}>
          {errors?.Password && errors.Password.message}
        </span>
      ) : (
        <span className={`valid ${errors?.ConfirmPassword ? '' : `hidden`}`}>
          {errors?.ConfirmPassword?.message}
        </span>
      )}
    </StyledinputProfile>
  );
}

export default FormInput;
