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
  email: string;
  userName: string;
}) => {
  const response = await axios.put(`user/change/information`, {
    email: payload.email,
    userName: payload.userName,
  });
  return response.data
}


export const newUserPassAsync = async (payload: {
  password: string, oldPassword: string
}) => {
  const response = await axios.put(`user/change/password`, {
    password: payload.password,
    oldPassword: payload.oldPassword,
  });
  return response.data
}


export const registration = async (payload: { email: string; password: string }) => {
  const response = await axios.post(`user/registration`, {
    email: payload.email,
    password: payload.password,
  });
  return response.data;
}

