import type { AxiosRequestConfig } from "axios";
import { BaseApi } from "./_base";

export class FileService extends BaseApi {
    constructor() {
        super();
    }

    public uploadImage(formData: FormData) {
        let config:AxiosRequestConfig = {
            url: this.initApi("FileServices", "Image"),
            method: "POST",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        return this.postSyncRequest(config,false,false,"multipart/form-data");
    }
    // public getImage(formData: FormData) {
    //     return this.post(formData);
    // }

}