import web_webview from '@ohos.web.webview';

@Entry
@Component
struct adminPayment{
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();

  build() {
    Stack(){
      Column() {
        Web({ src: $rawfile('admin/adminPayment.html'), controller: this.webviewController })
      }
      .width('100%')
      .height('100%')
    }
  }
}