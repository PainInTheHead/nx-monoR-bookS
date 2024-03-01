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
  const response = await axios.post(`user/login`, {
    email: payload.email,
    password: payload.password,
  });
  return response.data;
};


export const getUser = async () => {
  const response = await axios.get(`user/userinfo`)
  if (!response) return;
  return response.data
}



// export const getUser = createAsyncThunk("user/Infouser", async () => {
//   const response = await axios.get(`user/userinfo`);
//   return response.data;
// });
