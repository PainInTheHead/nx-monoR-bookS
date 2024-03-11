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
    Price: boolean;
    Name: boolean;
    Author_name: boolean;
    Rating: boolean;
    Date_of_issue: boolean;
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


  export type SortBy = 'Price' | 'Name' | 'Author_name' | 'Rating' | 'Date_of_issue';