import axios from "axios"
import { AppResponse } from "../Models/Response"
// import { Member, UserCommonAttributes } from "../models/User"
import { Util } from "../Util"
// import {PostModel} from "../models/Post"
// import { AnyIfEmpty } from "react-redux"



export class AuthService {
//     public static async systemData(): Promise<AppResponse<any>> {
//         const url = Util.apiAuthUrl("get/system/data");
//         return await axios.get<void, AppResponse<any>>(url);
//     }
//     public static async systemWdgetData(): Promise<AppResponse<any>> {
//       const url = Util.apiAuthUrl("get/dashboard/data");
//       return await axios.get<void, AppResponse<any>>(url);
//   }
    // public static async getAllSystemUsers( SearchData: any,offset = 1): Promise<AppResponse<any[]>> {
    //   const url = Util.apiAuthUrl(`get/system/users/10/${offset}`);
    //   return await axios.post<Partial<any>, AppResponse<any[]>>(url, SearchData);
    // }
//     public static async getAllSystemNewsLetterSubUsers( offset = 1): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`newsletter-subscriptions/10/${offset}`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getAllContactsInformations( offset = 1): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`inquiries/10/${offset}`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getAllSystemTopUsers(orderCode: any,offset = 1): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`get/top/creators/${orderCode}/10/${offset}`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async blockUsersByAdmin(userId: any): Promise<AppResponse<any>> {
//         console.log("api userID",userId)
//         const ep = Util.apiAuthUrl("block/user")
//         const res = await axios.post<any, AppResponse<any>>(ep, userId)
//         return res
//       }
      public static async registerUser(regData: any): Promise<AppResponse<any>> {
        const ep = Util.apiAuthUrl("register")
        const res = await axios.post<any, AppResponse<any>>(ep, regData)
        return res
      }
//     public static async getAllReports( SearchData: any,offset = 1): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`search/all/reports/10/${offset}`);
//       return await axios.post<Partial<any>, AppResponse<any[]>>(url, SearchData);
//     }
//     public static async getAllPostReports( SearchData: any,offset = 1): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`search/reported/posts/10/${offset}`);
//       return await axios.post<Partial<any>, AppResponse<any[]>>(url, SearchData);
//     }
//     public static async blockPost( postId: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("block/unblock/post")
//       const res = await axios.post<any, AppResponse<any>>(ep, postId)
//       return res
//     }
//     public static async changeReportStatus( SearchData: any): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`update/report/in-progress`);
//       return await axios.post<Partial<any>, AppResponse<any[]>>(url, SearchData);
//     }
//     public static async blockUserByAdmin( UserId: any): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`block/user`);
//       return await axios.post<Partial<any>, AppResponse<any[]>>(url, UserId);
//     }
//     public static async changePostReportStatus( data: any): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`update/reported/post/status`);
//       return await axios.post<Partial<any>, AppResponse<any[]>>(url, data);
//     }
//     public static async getPopularCretors(): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`get/popular/creators/3/1`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getBlockedPosts(): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`fetch/blocked/posts`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getPopularPosts(): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`get/popular/posts/4/1`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getAllAdmins(): Promise<AppResponse<any[]>> {
//       const url = Util.apiAuthUrl(`get/all/admins`);
//       return await axios.get<Partial<any>, AppResponse<any[]>>(url);
//     }
//     public static async getAllCreatorsUsers(data: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("get/users/data")
//       const res = await axios.post<any, AppResponse<any>>(ep, data)
//       return res
//     }
//     public static async getAllRevenue(data: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("get/revenue/data")
//       const res = await axios.post<any, AppResponse<any>>(ep, data)
//       return res
//     }
//     public static async blockAdminBySuperAdmin(adminId: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("block/admin")
//       const res = await axios.post<any, AppResponse<any>>(ep, adminId)
//       return res
//     }
//     public static async setCommision(data: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("set/commission")
//       const res = await axios.post<any, AppResponse<any>>(ep, data)
//       return res
//     }
//     public static async updateBasicPlan(data: any): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("update/basic/plans")
//       const res = await axios.post<any, AppResponse<any>>(ep, data)
//       return res
//     }
//     //admin chat services- get all user chats
//     public static async adminGetAllUserChats(): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("chat/admin/allUserChats")
//       const res = await axios.get<any, AppResponse<any>>(ep)
//       return res
//     }
//     public static async getCommision(): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("get/commission-fee")
//       const res = await axios.get<any, AppResponse<any>>(ep)
//       return res
//     }
//     public static async getBasicPlans(): Promise<AppResponse<any>> {
//       const ep = Util.apiAuthUrl("get/sub-plans/get-basic-plan-data")
//       const res = await axios.get<any, AppResponse<any>>(ep)
//       return res
//     }
//     public static async searchUserChats(searchText: string): Promise<AppResponse<any>> {
//       const reqData = {
//         searchTag: searchText,
//       };
//       const ep = Util.apiAuthUrl("admin/search/chat");
  
//       const res = await axios.post<void, AppResponse<any>>(ep, reqData);
//       return res;
//     }
//     public static async getSinglePostByAdmin(id: string): Promise<AppResponse<any>> {
//       const url = Util.apiAuthUrl(`get/post/details/admin/${id}`);
//       return await axios.get<void, AppResponse<any>>(url);
//     }
}
