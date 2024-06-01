import { Axios } from "axios";
import HttpClientAxios from "./http-client";

export class BaseApi extends HttpClientAxios {
    constructor() {
        super();
    }

    protected initApi(services: string,controller: string) {
        return `${window?.configApi[services]}/${controller}`
    }
}