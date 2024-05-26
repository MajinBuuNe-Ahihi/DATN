import { Axios } from "axios";
import HttpClientAxios from "./http-client";

class BaseApi extends HttpClientAxios {
    constructor() {
        super();
    }

    private initApi(services: string,controller: string) {
        return `${window?.confgApi[services]}/${controller}`
    }
}