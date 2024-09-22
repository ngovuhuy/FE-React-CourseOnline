import BASE_URL from "./apiService";
import Cookies from "js-cookie";

interface ILoginResult {
    success: boolean;
    token?: string;
    role?: string;
    errorMessage?: string;
  }
  interface ILoginRequest {
    email: string;
    password: string;
  }
  
interface ILoginResponse {
    toKen: string;
    roleName: string;
    userName: string;
  }
interface IAuthenticateService {
    loginClient(email: string, password: string): Promise<ILoginResult>;
    signUpClient(user: {
      email: string;
      userName: string;
      password: string;
      role: string;
    }): Promise<void>;
}
const authenticateService: IAuthenticateService = {
  async loginClient(email: string, password: string): Promise<ILoginResult> {
    try {
      const response = await fetch(`${BASE_URL}/loginClient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password } as ILoginRequest),
      });

      if (response.ok) {
        const data: ILoginResponse = await response.json();
        const token = data.toKen;
        const userName = data.userName;
        const roleName = data.roleName;

        // Save token to cookies for future requests
        Cookies.set("tokenUser", token, { expires: 7 });
        Cookies.set("userName", userName, { expires: 7 });
        Cookies.set("roleName", roleName, { expires: 7 });

        return { success: true, token };
      } else {
        // Nếu response không ok (ví dụ mã trạng thái 400, 401)
        const errorData = await response.json();
        return { success: false, errorMessage: errorData.errorMessage || "Invalid credentials" };
      }
    } catch (error) {
      // Xử lý lỗi khi không thể kết nối tới server hoặc có lỗi mạng
      console.error("Error:", error);
      return {
        success: false,
        errorMessage: "Tài khoản hoặc mật khẩu không chính xác",
      };
    }
  },
  async signUpClient(user) {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Sign Up unsuccessful!");
      }
    } catch (error) {
      console.error("Error sign up user:", error);
      throw error;
    }
  },
};
     

export default authenticateService;