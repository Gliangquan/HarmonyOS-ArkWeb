import web_webview from '@ohos.web.webview';
import { UserLoginRequest } from '../api/models/UserLoginRequest';
import { UserRegisterRequest } from '../api/models/UserRegisterRequest';
import { promptAction, router } from '@kit.ArkUI';
import { AxiosResponse } from '@ohos/axios';
import { UserService } from '../api/service/UserService';
import webview from '@ohos.web.webview';

class LoginUserClass {
  private userLoginRequest: UserLoginRequest = {};
  private userRegisterRequest: UserRegisterRequest = {};
  setUserLoginRequest(userLoginRequest: UserLoginRequest) {
    this.userLoginRequest = userLoginRequest;
  }
  getUserLoginRequest(): UserLoginRequest {
    return this.userLoginRequest;
  }
  setUserRegisterRequest(userRegisterRequest: UserRegisterRequest) {
    this.userRegisterRequest = userRegisterRequest;
  }
  getUserRegisterRequest(): UserRegisterRequest {
    return this.userRegisterRequest;
  }
  // 登录
  onLogin = async (params: string): Promise<void> => {
    try {
      const parsedParams: UserLoginRequest = JSON.parse(params);
      const userAccount = parsedParams.userAccount;
      const userPassword = parsedParams.userPassword;
      if (!userAccount?.trim() || !userPassword?.trim()) {
        promptAction.showToast({
          message: '用户名和密码不能为空'
        });
      }
      const response: AxiosResponse = await UserService.userLoginUsingPost(parsedParams) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '登录成功'
        });
        let cookie = response.headers['set-cookie'];
        if (cookie) {
          try {
            let coo = cookie[0].split(';');
            webview.WebCookieManager.configCookieSync('index.html', coo[0]);
          } catch (error) {
            console.error(`ErrorCode: ${error.code}, Message: ${error.message}`);
          }
        }
        // 跳转到主页面
        router.replaceUrl({
          url: 'pages/Index',
        })
        router.clear()
      }else {
        promptAction.showToast({
          message: response.data.message,
        });
      }
    } catch (error) {
      promptAction.showToast({
        message: '登录失败：'+error
      });
    }
  };
  // 注册
  onRegister = async (params: string): Promise<void> => {
    try {
      const parsedParams: UserRegisterRequest = JSON.parse(params);
      const userAccount = parsedParams.userAccount;
      const userPassword = parsedParams.userPassword;
      const checkPassword = parsedParams.checkPassword;
      if (!userAccount?.trim() || !userPassword?.trim() || !checkPassword?.trim()) {
        promptAction.showToast({
          message: '用户名、密码和确认密码不能为空',
        });
      }
      if (userPassword !== checkPassword) {
        promptAction.showToast({
          message: '密码和确认密码不一致',
        });
      }
      const response: AxiosResponse  = await UserService.userRegister(parsedParams) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '注册成功',
        });
        // 跳转到主页面
        router.replaceUrl({
          url: 'pages/Index',
        })
        router.clear()
      }else {
        promptAction.showToast({
          message: response.data.message,
        });
      }
    } catch (error) {
      promptAction.showToast({
        message: '注册失败: '+error,
      });
    }
  };
}

@Entry
@Component
struct LoginPage {
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();
  @State loginUserClass: LoginUserClass = new LoginUserClass();

  build() {
    Stack(){
      Column() {
        Web({ src: $rawfile('login.html'), controller: this.webviewController })
          .javaScriptProxy({
            object: this.loginUserClass,
            name: "loginUserClass",
            methodList: ["setUserLoginRequest","getUserLoginRequest",
              "setUserRegisterRequest","getUserRegisterRequest",
              "onLogin","onRegister"],
            controller: this.webviewController
          })
      }
      .width('100%')
      .height('90%')
    }
  }
}