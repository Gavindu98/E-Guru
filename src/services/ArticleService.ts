import axios from "axios"
import { AppResponse } from "../Models/Response"
import { Util } from "../Util"



export class ArticleService {
    public static async getAllMyArticles(): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl("post/post-all-view");
        return await axios.get<Partial<any>, AppResponse<any[]>>(url, { headers: { "Authorization": `Bearer ${token}` } });

    }
    public static async createArticle(postData: any): Promise<AppResponse<any>> {
        const token = localStorage.getItem("token")
        const ep = Util.apiPrivateUrl("post/post-create")
        const res = await axios.post<any, AppResponse<any>>(ep, postData, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
}
