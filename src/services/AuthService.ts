import axios from "axios"
import { AppResponse } from "../Models/Response"
import { Util } from "../Util"



export class AuthService {
  private static readonly TOKEN_KEY = "token";

  public static async registerUser(regData: any): Promise<AppResponse<any>> {
    const ep = Util.apiAuthUrl("register")
    const res = await axios.post<any, AppResponse<any>>(ep, regData)
    return res
  }

  public static async loginUser(logData: any): Promise<AppResponse<any>> {
    const ep = Util.apiAuthUrl("login")
    const res = await axios.post<any, AppResponse<any>>(ep, logData)
    if (res.success) {
      console.log(res.data);
      localStorage.setItem(AuthService.TOKEN_KEY, res.data); //TODO read token from cookie and remove this implementation

    } else {
      //alert("Register failed")
      console.log(res);
    }
    return res
  }
  // public static userLogout(): void {
  //   const ep = Util.apiPublicUrl("logout");
  //   localStorage.removeItem(AuthService.TOKEN_KEY); //TODO read token from cookie and remove this implementation
  // }

  // public static getToken(): string | null {
  //   return localStorage.getItem(AuthService.TOKEN_KEY); //TODO read token from cookie and remove this implementation
  // }

  // public static setToken(token: string): void {
  //   localStorage.setItem(AuthService.TOKEN_KEY, token); //TODO read token from cookie and remove this implementation
  // }
}
