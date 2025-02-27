import web_webview from '@ohos.web.webview';
import { AxiosResponse } from '@ohos/axios';
import { User } from '../../api/models/User';
import { UserQueryRequest } from '../../api/models/UserQueryRequest';
import { UserService } from '../../api/service/UserService';
import { promptAction } from '@kit.ArkUI';

class ListUserByPage {
  private page: User[] = [];
  setPage(page: User[]) {
    this.page = page;
  }
  getPage(): User[] {
    return this.page;
  }
  async listUserByPage(userQueryRequest: UserQueryRequest): Promise<boolean> {
    try {
      const response: AxiosResponse = await UserService.listUserByPage(userQueryRequest) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '查询成功'
        });
        this.setPage(response.data.data.records);
        // let a = this.getPage();
        // console.log("aaaa:"+a[1].userName)
        return true;
      } else {
        promptAction.showToast({
          message: response.data.message
        });
        return false;
      }
    } catch (error) {
      promptAction.showToast({
        message: "查询失败：" + error
      });
      return false;
    }
  }
}

@Entry
@Component
struct adminUser {
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();
  @State listUserByPage: ListUserByPage = new ListUserByPage();

  build() {
    Stack() {
      Column() {
        Web({
          src: $rawfile('admin/adminUser.html'),
          controller: this.webviewController
        })
          .javaScriptProxy({
            object: this.listUserByPage,
            name: "listUserByPage",
            methodList: ["listUserByPage", "getPage", "setPage"],
            controller: this.webviewController
          })
      }
    }
    .width('100%')
    .height('100%')
  }
}