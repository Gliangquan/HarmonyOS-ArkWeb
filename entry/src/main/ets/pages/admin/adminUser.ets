import web_webview from '@ohos.web.webview';
import { AxiosResponse } from '@ohos/axios';
import { User } from '../../api/models/User';
import { UserQueryRequest } from '../../api/models/UserQueryRequest';
import { UserService } from '../../api/service/UserService';
import { promptAction, router } from '@kit.ArkUI';
import { UserAddRequest } from '../../api/models/UserAddRequest';
import { DeleteRequest } from '../../api/models/DeleteRequest';
import { DeletesRequest } from '../../api/models/DeletesRequest';

class UserClass {
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

  async saveUser(userAddRequest: UserAddRequest): Promise<boolean> {
    try {
      const response: AxiosResponse = await UserService.addUser(userAddRequest) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '添加成功'
        });
        router.replaceUrl({
          url: 'pages/Index',
        })
        router.clear()
        return true;
      } else {
        promptAction.showToast({
          message: response.data.message
        });
        return false;
      }
    } catch (error) {
      promptAction.showToast({
        message: "添加失败：" + error
      });
      return false;
    }
  }

  async deleteUser(deleteRequest: DeleteRequest): Promise<boolean> {
    try {
      const response: AxiosResponse = await UserService.deleteUser(deleteRequest) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '删除成功'
        });
        return true;
      } else {
        promptAction.showToast({
          message: response.data.message
        });
        return false;
      }
    } catch (error) {
      promptAction.showToast({
        message: "删除失败：" + error
      });
      return false;
    }
  }

  async deletesUser(deletesRequest: DeletesRequest): Promise<boolean> {
    try {
      const response: AxiosResponse = await UserService.deletesUser(deletesRequest) as AxiosResponse;
      if (response.data.code === 0) {
        promptAction.showToast({
          message: '批量删除成功'
        });
        return true;
      } else {
        promptAction.showToast({
          message: response.data.message
        });
        return false;
      }
    } catch (error) {
      promptAction.showToast({
        message: "批量删除失败：" + error
      });
      return false;
    }
  }
}

@Entry
@Component
struct adminUser {
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();
  @State userClass: UserClass = new UserClass();

  build() {
    Stack() {
      Column() {
        Web({
          src: $rawfile('admin/adminUser.html'),
          controller: this.webviewController
        })
          .javaScriptProxy({
            object: this.userClass,
            name: "userClass",
            methodList: ["listUserByPage", "getPage", "setPage",
              "saveUser", "deleteUser", "deletesUser"],
            controller: this.webviewController
          })
      }
    }
    .width('100%')
    .height('100%')
  }
}