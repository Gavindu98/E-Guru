import axios from "axios"
import { AppResponse } from "../Models/Response"
import { Util } from "../Util"



export class AuthService {
  public static async registerUser(regData: any): Promise<AppResponse<any>> {
    const ep = Util.apiAuthUrl("register")
    const res = await axios.post<any, AppResponse<any>>(ep, regData)
    return res
  }
  public static async loginUser(logData: any): Promise<AppResponse<any>> {
    const ep = Util.apiAuthUrl("login")
    const res = await axios.post<any, AppResponse<any>>(ep, logData)
    return res
  }
}
