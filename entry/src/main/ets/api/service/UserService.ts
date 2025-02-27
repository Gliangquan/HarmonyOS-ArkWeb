import { AxiosRequestConfig } from '@ohos/axios';
import { axiosAPI } from '../BaseRequest'; // 引入通用返回类
import { UserLoginRequest } from '../models/UserLoginRequest';
import { UserRegisterRequest } from '../models/UserRegisterRequest';

// 注册函数
const userRegister = (params: UserRegisterRequest)=> {
  const config: AxiosRequestConfig = {
    url: '/api/user/register',
    method: 'POST',
    data: params,
  };
  return axiosAPI.post<object>(config)

};

// 登录函数
const userLoginUsingPost = (params: UserLoginRequest)=> {
  const config: AxiosRequestConfig = {
    url: '/api/user/login',
    method: 'POST',
    data: params,
  };
  return axiosAPI.post<object>(config)
};

// 导出服务
export const UserService = {
  userRegister,
  userLoginUsingPost,
};