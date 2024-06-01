import type { AxiosRequestConfig } from "axios";
import { BaseApi } from "./_base";

 class RegisterService extends BaseApi {
    private _baseUrl: string = ""
    constructor() {
        super();
        this._baseUrl =  this.initApi('RegisterServices','register')
    }

    async register(data:any) {
        let config:AxiosRequestConfig = {
            method: 'POST',
            url: this._baseUrl,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return  await this.postSyncRequest(config,false,false,'application/json');
    }

    async active(data:any) {
        let config:AxiosRequestConfig = {
            method: 'POST',
            url: this._baseUrl + '/active',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return await this.postSyncRequest(config,false,false,'application/json');
    }
}

export default new RegisterService();