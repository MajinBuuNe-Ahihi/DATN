import axios, { type CancelTokenSource, type AxiosBasicCredentials, type AxiosRequestTransformer, type AxiosAdapter } from "axios";

// config cho request handler
export type ConfigRequestOptions = {
    url?: string,
    method?: string,
    BaseUrl?: string
    transfromRequest?: AxiosRequestTransformer | Array<AxiosRequestTransformer> | undefined
    headers?: any,
    params?: any,
    paramsSerializer?: (p:any) => string,
    data?: any,
    timeout?: number,
    withCredentials?: boolean,
    adapter?: AxiosAdapter,
    auth?: AxiosBasicCredentials,
    responseType?: XMLHttpRequestResponseType,
    xsrfCookieName?: string,
    xsrfHeaderName?: string,
    onUploadProgress?: (progressEvent: any) => void,
    onDownloadProgress?: (progressEvent: any) => void,
    maxContentLength?: number,
    validateStatus?: (status: number) => boolean,
    maxRedirects?: number,
    httpAgent?: any,
    httpsAgent?: any,
    proxy?: any,
    cancelToken?: CancelTokenSource,
    decompress?: boolean,
    responseEncoding?: string,
}
