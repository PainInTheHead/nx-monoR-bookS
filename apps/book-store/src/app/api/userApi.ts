import axios from './axios.config';

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
  const response = await axios.post(`user/upload/avatar`, payload.formData);
  return response.data.filename;
};


export const newUserDataAsync = async (payload: {
  Email: string;
  UserName: string;
}) => {
  const response = await axios.put(`user/change/information`, {
    Email: payload.Email,
    UserName: payload.UserName,
  });
  return response.data
}


export const newUserPassAsync = async (payload: {
  Password: string, oldPassword: string
}) => {
  const response = await axios.put(`user/change/password`, {
    Password: payload.Password,
    oldPassword: payload.oldPassword,
  });
  return response.data
}


export const registration = async (payload: { Email: string; Password: string }) => {
  const response = await axios.post(`user/registration`, {
    email: payload.Email,
    password: payload.Password,
  });
  return response.data;
}

