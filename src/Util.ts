import { environment } from "./environment/environment";
import axios from "axios";

export class Util {
  public static apiPublicUrl(path: any): string {
    return environment.api_url + "/api/public/" + path;
  }

  public static apiAuthUrl(path: any): string {
    return environment.api_url + "/api/auth/" + path;
  }
}

Util;
