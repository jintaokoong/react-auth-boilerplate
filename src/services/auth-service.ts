import { AxiosResponse } from 'axios';
import { ApiLoginSuccessResponse } from '../interfaces/api/auth';
import axios from './axios';


export const login = async (payload: any): Promise<AxiosResponse<ApiLoginSuccessResponse>> => {
  try {
    const response: AxiosResponse<ApiLoginSuccessResponse> = await axios.post('/auth/login', {
      email: payload.email,
      password: payload.password,
    });
    return response;
  } catch (e) {
    if (e.response !== undefined) {
      throw e;
    }

    throw e;
  }
}