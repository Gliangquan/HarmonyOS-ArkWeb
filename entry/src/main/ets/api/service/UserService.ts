import { AxiosRequestConfig } from '@ohos/axios';
import { axiosAPI } from '../BaseRequest';
import { UserLoginRequest } from '../models/UserLoginRequest';
import { UserQueryRequest } from '../models/UserQueryRequest';
import { UserRegisterRequest } from '../models/UserRegisterRequest';
import { UserUpdateMyRequest } from '../models/UserUpdateMyRequest';

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

const getLoginUserUsingGet = ()=>{
  const config: AxiosRequestConfig = {
    url: '/api/user/get/login',
    method: 'Get',
  };
  return axiosAPI.get<object>(config)
}

const updateMyUser = (params: UserUpdateMyRequest)=>{
  const config: AxiosRequestConfig = {
    url: '/api/user/update/my',
    method: 'POST',
    data: params,
  };
  return axiosAPI.post<object>(config)
}

// admin
const listUserByPage = (params: UserQueryRequest)=>{
  const config: AxiosRequestConfig = {
    url: '/api/user/list/page',
    method: 'POST',
    data: params,
  };
  return axiosAPI.post<object>(config)
}

export const UserService = {
  userRegister,
  userLoginUsingPost,
  getLoginUserUsingGet,
  updateMyUser,

  // admin
  listUserByPage
};