import web_webview from '@ohos.web.webview';
import business_error from '@ohos.base';
import { UserService } from '../api/service/UserService';
import { promptAction } from '@kit.ArkUI';
import { AxiosResponse } from '@ohos/axios';
import { webview } from '@kit.ArkWeb'
import { BaseResponse_LoginUserVO_ } from '../api/models/BaseResponse_LoginUserVO_';
import { UserUpdateMyRequest } from '../api/models/UserUpdateMyRequest';
import router from '@ohos.router'

@Entry
@Component
struct Index {
  @State message: string = 'ArkWebView Demo';
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();
  ports: web_webview.WebMessagePort[] = [];

  // 获取当前登录用户
  getLoginUser = async (): Promise<BaseResponse_LoginUserVO_> => {
    try {
      const response: AxiosResponse = await UserService.getLoginUserUsingGet() as AxiosResponse;
      if (response.data.code === 0) {
        console.log(response.data)
        return {
          code: response.data.code,
          data: response.data.data,
          message: 'response.data.message'
        }
      }else {
        promptAction.showToast({
          message: response.data.message
        });
      }
      return {
        code: response.data.code,
        message: 'response.data.message'
      }
    }catch (error){
      return {
        code: 500,
        message: '获取用户信息失败'
      }
    }
  }

  // 更新用户信息
  onUpdateUserInfo = async (updatedInfo: UserUpdateMyRequest): Promise<boolean> => {
    try {
      const userName = updatedInfo.userName;
      const userProfile = updatedInfo.userProfile;
      if (!userName?.trim() || !userProfile?.trim()) {
        promptAction.showToast({
          message: '信息不能为空'
        });
        return false;
      }
      const response: AxiosResponse = await UserService.updateMyUser(updatedInfo) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '修改成功'
        });
      }
      return true;
    } catch (error) {
      promptAction.showToast({
        message: '修改失败'
      });
      return false;
    }
  }

  build() {
    Stack() {
      Column() {
        Web({ src: $rawfile('index.html'), controller: this.webviewController })
      }
      .width('100%')
      .height('90%')
      // 底部导航栏
      Column() {
        Row() {
          Button('首页')
            .onClick(() => {
              try {
                this.webviewController.loadUrl($rawfile("index.html"));
              } catch (error) {
                let e: business_error.BusinessError = error as business_error.BusinessError;
                console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
              }
            })
            .margin(5)
            .flexGrow(1)

          Button('报修')
            .onClick(() => {
              try {
                this.webviewController.loadUrl($rawfile("repair.html"));
              } catch (error) {
                let e: business_error.BusinessError = error as business_error.BusinessError;
                console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
              }
            })
            .margin(5)
            .flexGrow(1)

          Button('账单')
            .onClick(() => {
              try {
                this.webviewController.loadUrl($rawfile("bullet.html"));
              } catch (error) {
                let e: business_error.BusinessError = error as business_error.BusinessError;
                console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
              }
            })
            .margin(5)
            .flexGrow(1)

          Button('我的')
            .onClick(async () => {
              try {
                let userInfo = await this.getLoginUser()
                if (userInfo.code == 0) {
                  try {
                    this.webviewController.registerJavaScriptProxy(
                      {
                        getUserInfo: () => userInfo.data,
                        updateProfile: () => {
                          router.pushUrl({
                            url: 'pages/UpdatePage',
                            params: {
                              userVO: userInfo.data,
                            }
                          })
                        },
                        logout: () => {
                          // 清理所有cookie
                          webview.WebCookieManager.clearAllCookiesSync();
                          router.replaceUrl({
                            url: 'pages/LoginPage',
                          })
                          router.clear();
                        }
                      },
                      "appBridge",
                      ["getUserInfo", "updateProfile",
                        "logout", ]
                    );
                    this.webviewController.loadUrl($rawfile("profile.html"));
                  }catch (error){
                    let e: business_error.BusinessError = error as business_error.BusinessError;
                    console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
                  }
                } else {
                  try {
                    router.replaceUrl({
                      url: 'pages/LoginPage',
                    })
                    router.clear();
                  }catch (error){
                    let e: business_error.BusinessError = error as business_error.BusinessError;
                    console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
                  }
                }
              } catch (error) {
                let e: business_error.BusinessError = error as business_error.BusinessError;
                console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
              }
            })
            .margin(5)
            .flexGrow(1)

          Button('管理')
            .onClick(async () => {
              try {
                this.webviewController.registerJavaScriptProxy(
                  {
                    adminUser: () => {
                      router.pushUrl({
                        url: 'pages/admin/adminUser',
                      })
                    },
                    adminRepair: () => {
                      router.pushUrl({
                        url: 'pages/admin/adminRepair',
                      })
                    },
                    adminBilling: () => {
                      router.pushUrl({
                        url: 'pages/admin/adminBilling',
                      })
                    },
                    adminAnno: () => {
                      router.pushUrl({
                        url: 'pages/admin/adminAnno',
                      })
                    },
                    adminPayment: () => {
                      router.pushUrl({
                        url: 'pages/admin/adminPayment',
                      })
                    },
                  },
                  "appBridge",
                  ["adminUser","adminRepair",
                    "adminBilling","adminAnno",
                    "adminPayment"]
                );
                this.webviewController.loadUrl($rawfile("admin/index.html"));
              }catch (error){
                let e: business_error.BusinessError = error as business_error.BusinessError;
                console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);
              }
            })
            .margin(5)
            .flexGrow(1)
        }
        .width('100%')
        .height('100%')
        .justifyContent(FlexAlign.SpaceAround)
      }
      .width('100%')
      .height('10%')
      .position({ x: 0, y: '90%' })
    }
    .width('100%')
    .height('100%')
  }
}
