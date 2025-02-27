import { webview } from '@kit.ArkWeb';
import { AxiosResponse } from '@ohos/axios';
import { BaseResponse_LoginUserVO_ } from '../api/models/BaseResponse_LoginUserVO_';
import { UserService } from '../api/service/UserService';

export function isLogin(){
  let cookie = webview.WebCookieManager.fetchCookieSync('index.html');
  if (cookie) {
    return true;
  }else {
    return false;
  }
}

export async function isLoginUser(): Promise<BaseResponse_LoginUserVO_>{
  try {
    const response: AxiosResponse = await UserService.getLoginUserUsingGet() as AxiosResponse;
    if (response.data.code === 0) {
      return response.data.data;
    }else {
      return {
        code: response.data.code,
        message: response.data.message
      }
    }
  }catch(error){
    return {
      code: 500,
      message: '获取用户信息失败'
    }
  }
}