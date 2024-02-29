export type OptionsDrop = {
    Genre: boolean;
    Price: boolean;
    Sort: boolean;
  };

  export type Options = {
    option1: boolean;
    option2: boolean;
    option3: boolean;
  };
  

  export type OptionsSort = {
    option_1: boolean;
    option_2: boolean;
    option_3: boolean;
  };


  export type IFormInput = {
    Email: string;
    Password: string;
    ConfirmPassword?: string;
    UserName?: string;
    oldPassword?: string;
  
  };


  export type FormTypes =
  | "Email"
  | "Password"
  | "ConfirmPassword"
  | "UserName"
  | "oldPassword";
