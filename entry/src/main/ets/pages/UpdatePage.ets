import web_webview from '@ohos.web.webview';
import { UserVO } from '../api/models/UserVO';
import { promptAction, router } from '@kit.ArkUI';
import { UserUpdateMyRequest } from '../api/models/UserUpdateMyRequest';
import { UserService } from '../api/service/UserService';
import { AxiosResponse } from '@ohos/axios';

class UpdateUserInfoClass {
  private userInfo: UserVO = {}; // 将 userInfo 放入类中
  setUserInfo(userInfo: UserVO) {
    this.userInfo = userInfo;
  }
  getUserInfo(): UserVO {
    return this.userInfo;
  }

  async onSaveButtonClick(updatedInfo: UserUpdateMyRequest): Promise<void> {
    console.log('Updated Info:', updatedInfo);
    console.log('Original User Info:', this.userInfo);

    const response: AxiosResponse  = await UserService.updateMyUser(updatedInfo) as AxiosResponse;
    if (response.data.code === 0) {
      promptAction.showToast({
        message: '修改成功'
      });
      // 跳转到主页面
      router.replaceUrl({
        url: 'pages/Index',
      })
      router.clear()
    }else {
      promptAction.showToast({
        message: '修改失败'
      });
    }
  }
}


@Entry
@Component
struct UpdatePage {
  @State updateUserInfoClass: UpdateUserInfoClass = new UpdateUserInfoClass();
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();

  onPageShow() {
    const userInfo: UserVO = router.getParams();
    if (userInfo) {
      this.updateUserInfoClass.setUserInfo(userInfo)
    }
  }
  build() {
    Stack() {
      Column() {
        Web({
          src: $rawfile('update_profile.html'),
          controller: this.webviewController
        })
          .javaScriptProxy({
            object: this.updateUserInfoClass,
            name: "updateUserInfoClass",
            methodList: ["onSaveButtonClick","getUserInfo"],
            controller: this.webviewController
          })
      }
      .width('100%')
      .height('100%')
    }
  }
}