import axios, { type CancelTokenSource , type AxiosRequestConfig, type AxiosError} from 'axios';
import moment from 'moment';
import  Qs from 'qs';
import { ACCEPT_LANGUAGE, APPLICATION_JSON, AUTHORIZATION, CONTENTTYPE,GET,POST,PUT,DELETE,PATCH, FORMURLENDCODE } from '@src/lib';
import { Axios } from 'node_modules/axios/index.cjs';

type CancelRequestType = {
  Key: string
  Value: CancelTokenSource
  Time: number
  IsCancelRequest: boolean
}

class HttpClient {

  private cancelRequests: Array<CancelRequestType> = []

  constructor() {
    this.cancelRequests = []
  }
  public  async postSyncRequest(config: AxiosRequestConfig,isShowloading: boolean ,isCancelRequest:boolean,contentType: string)
  {
    return await this.requestAsync(config,POST,isShowloading,isCancelRequest,contentType)
  }

  public  async putSyncRequest(config: AxiosRequestConfig,isShowloading: boolean ,isCancelRequest:boolean,contentType: string)
  {
    return await this.requestAsync(config,PUT,isShowloading,isCancelRequest,contentType)
  }

  public  async deleteSyncRequest(config: AxiosRequestConfig,isShowloading: boolean ,isCancelRequest:boolean,contentType: string)
  {
    return await this.requestAsync(config,DELETE,isShowloading,isCancelRequest,contentType)
  }

  public  async patchSyncRequest(config: AxiosRequestConfig,isShowloading: boolean ,isCancelRequest:boolean,contentType: string)
  {
    return await this.requestAsync(config,PATCH,isShowloading,isCancelRequest,contentType)
  }

  public  async getSyncRequest(config: AxiosRequestConfig,isShowloading: boolean ,isCancelRequest:boolean,contentType: string)
  {
    return await this.requestAsync(config,GET,isShowloading,isCancelRequest,contentType)
  }

  private async requestAsync(config: AxiosRequestConfig,method: string,isShowloading: boolean = false,isCancelRequest:boolean = true,contentType: string = APPLICATION_JSON)
 {
    try {

        //loging
    
        //xử lý header
        this.processHeaders(config,contentType);
    
        //xử lý data 
        this.processDataOrParams(config,contentType);
    
        // xử lý cancel request
        let cancelRequest: CancelRequestType | null;
        if(isCancelRequest) {
            const key:string =  this.getKey(config);
            cancelRequest = this.addCancelRequest(config,key, isCancelRequest);
        }
    
        //xử lý loading
        if(isShowloading) {
            this.setLoading(isShowloading,true);
        }
        //gọi api
        const result = await axios(config);
    
        if(result.data) {
            return result.data; 
        }
    }catch (ex ) {
        //loging error
        const error:AxiosError = ex as AxiosError;
        if(error.response && error.response.status == 401) {
            // hết phiên  thực hiện logout
        }
    }finally {
        this.setLoading(isShowloading,false);
    }

 }
  private processDataOrParams(config:AxiosRequestConfig,method:string, contentType:string = APPLICATION_JSON):void{
    config.method = method;

    switch(config.method){
        case GET:
            if(config.data != null && config.data != undefined ){
                const queryString:string = Qs.stringify(config.data)
                if(queryString !== null && queryString !== undefined && queryString) {
                    config.url = [config.url,queryString].join(config.url?.indexOf('?') === -1 ? '?' : '&')
                }
            }
            break;
        case POST:
        case PUT:   
        case DELETE: 
        case PATCH:
            if(contentType == FORMURLENDCODE) {
                config.data = Qs.stringify(config.data)
            }
            if(config.data!= null && config.data!= undefined){        
                this.processSubmitRequest(config.data,0)
            }
        break;
    }
  }

  private processSubmitRequest(data: any, count: number = 0): void {
    if (count > 20) return

    // lấy từng phần tử của data ra check
    for (const i in data) {
      const value = data[i]
      if (value != null && value != undefined) {
        if (typeof value.getFullYear === 'function') {
          data[i] = moment(value).format('YYYY-MM-DDTHH:mm:ss')
        } else if (typeof value === 'object') {
          this.processSubmitRequest(value, count + 1)
        } else if (typeof value === 'string') {
          data[i] = value.trim()
        } else if (Array.isArray(value)) {
          value.forEach((item) => this.processSubmitRequest(item, count + 1))
        }
      }
    }
  }

  private processHeaders(
    config: AxiosRequestConfig,
    contentType: string = APPLICATION_JSON
  ): void {
    // lấy dữ liệu của headers
    const headers: any = config.headers || {}
    if (!headers[AUTHORIZATION]) {
      // tạm thời lấy theo localstorage
      headers[AUTHORIZATION] = localStorage.getItem(AUTHORIZATION)
    }

    headers[CONTENTTYPE] = contentType

    let acceptLanguage: string = 'en-US'
    const currentLanguage: string = localStorage.getItem(ACCEPT_LANGUAGE) as string
    if (!localStorage.getItem(ACCEPT_LANGUAGE) && typeof acceptLanguage) {
      acceptLanguage = currentLanguage
    }
    headers[ACCEPT_LANGUAGE] = `${acceptLanguage};${acceptLanguage.split('-')[0]};q=0.9`

    //update header

    config.headers = headers

    // tạm thời fix cứng timeout
    if (!config.timeout) {
      config.timeout = 10000
    }
  }

  private getKey(config: AxiosRequestConfig): string {
    if (config !== undefined && config !== null) {
      return `${config.url}--${config.method}$`
    }
    return ''
  }

  private removeRequest(request: CancelRequestType, from: string): void {
    try {
      if (request === null) return

      // hủy request
      if (request.Value) {
        request.Value.cancel()
      }

      // xóa trong danh sách chờ hủy
      this.cancelRequests.splice(this.cancelRequests.indexOf(request), 1)
    } catch (error) {
      //to do logging
    }
  }

  private addCancelRequest(
    config: AxiosRequestConfig,
    key: string,
    isCancelRequest: boolean
  ): CancelRequestType | null {
    try {
      const requests: Array<CancelRequestType> = this.cancelRequests.filter(
        (item: CancelRequestType) => item.Key === key && item.IsCancelRequest === isCancelRequest
      )
      if (requests !== null && requests.length > 0) {
        // xóa request cũ
        requests.forEach((item: CancelRequestType) => {
          this.removeRequest(item, 'addCancelRequest')
        })
      }

      // cancel token source
      const cancelTokenSource = axios.CancelToken.source()

      // update lại token source vào config
      config.cancelToken = cancelTokenSource.token;

      const cancelRequest: CancelRequestType = {
        Key: key,
        Value: cancelTokenSource,
        Time: new Date().getTime(),
        IsCancelRequest: isCancelRequest
      }

      // danh sách chờ hủy request
      this.cancelRequests.push(cancelRequest)

      return cancelRequest
    } catch (error) {
      //to do log error
    }
    return null
  }
  private setLoading(isShowloading: boolean, isLoading: boolean): void {
    if (isShowloading) {
      if (isLoading) {
        // to do when loading
      } else {
        // to do when loaded
      }
    }
  }
}
