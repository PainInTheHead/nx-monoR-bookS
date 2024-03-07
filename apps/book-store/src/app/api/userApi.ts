import axios from './axios.config';

export const registrationAsync = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`user/registration`, {
    email: payload.email,
    password: payload.password,
  });
  return response.data;
};

export const authorization = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await axios.post<{
    id: number;
    token: string;
    avatar: null | string;
    userName: string;
    email: string;
  }>(`user/login`, {
    email: payload.email,
    password: payload.password,
  });
  return response.data;
};

export const getUser = async () => {
  const response = await axios.get(`user/userinfo`);
  if (!response) return;
  return response.data;
};

export const newAvatarAsync = async (payload: { formData: FormData }) => {
  const response = await axios.post(`user/upload`, payload.formData);
  return response.data.filename;
};


export const newUserDataAsync = async (payload: {
  Email: string;
  UserName: string;
}) => {
  const response = await axios.put(`user/changeAboutUser`, {
    Email: payload.Email,
    UserName: payload.UserName
  })
  return response.data
}


export const newUserPassAsync = async (payload: {
  Password: string
}) => {
  const response = await axios.put(`user/changePasswordUser`, {
    Password: payload.Password,
  })
  return response.data
}

