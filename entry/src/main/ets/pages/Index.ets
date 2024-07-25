import web_webview from '@ohos.web.webview';

@Entry
@Component
struct Index {
  @State message: string = 'ArkWebView Demo';
  controller: web_webview.WebviewController = new web_webview.WebviewController();

  build() {
    RelativeContainer() {
      Web({ src: $rawfile('index.html'), controller: this.controller })
        .domStorageAccess(true)
        .fileAccess(true)
        .imageAccess(true)
        .javaScriptAccess(true)

        .enableNativeEmbedMode(true)
        .onTitleReceive((event) => {

        })
        .onPageEnd(() => {
          console.log('[ArkWeb] onPageEnd 执行===========')


        })
        .onErrorReceive((event) => {
          console.log('[ArkWeb] onErrorReceive 执行===========')
          if (event) {
            console.log('getErrorInfo:' + event.error.getErrorInfo())
            console.log('getErrorCode:' + event.error.getErrorCode())
            console.log('url:' + event.request.getRequestUrl())
            console.log('isMainFrame:' + event.request.isMainFrame())
            console.log('isRedirect:' + event.request.isRedirect())
            console.log('isRequestGesture:' + event.request.isRequestGesture())
            console.log('getRequestHeader_headerKey:' + event.request.getRequestHeader().toString())
            let result = event.request.getRequestHeader()
            console.log('The request header result size is ' + result.length)
            for (let i of result) {
              console.log('The request header key is : ' + i.headerKey + ', value is : ' + i.headerValue)
            }

          }
        })
        .onHttpErrorReceive((event) => {
          if (event) {
            console.log('url:' + event.request.getRequestUrl())
            console.log('isMainFrame:' + event.request.isMainFrame())
            console.log('isRedirect:' + event.request.isRedirect())
            console.log('isRequestGesture:' + event.request.isRequestGesture())
            console.log('getResponseData:' + event.response.getResponseData())
            console.log('getResponseEncoding:' + event.response.getResponseEncoding())
            console.log('getResponseMimeType:' + event.response.getResponseMimeType())
            console.log('getResponseCode:' + event.response.getResponseCode())
            console.log('getReasonMessage:' + event.response.getReasonMessage())
            let result = event.request.getRequestHeader()
            console.log('The request header result size is ' + result.length)
            for (let i of result) {
              console.log('The request header key is : ' + i.headerKey + ' , value is : ' + i.headerValue)
            }
            let resph = event.response.getResponseHeader()
            console.log('The response header result size is ' + resph.length)
            for (let i of resph) {
              console.log('The response header key is : ' + i.headerKey + ' , value is : ' + i.headerValue)
            }
          }
        })
        .onProgressChange((event) => {
          if (event) {
            console.log('newProgress:' + event.newProgress)
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}