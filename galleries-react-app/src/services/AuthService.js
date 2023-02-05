import ApiService from "./ApiService";

class AuthService extends ApiService {
  login = async (credentials) => {
    const response = await this.client.post("/auth/login", credentials);
    this.setAndRedirect(response);
    console.log(response);
    return response;
  };

  setAndRedirect = (response) => {
    window.localStorage.setItem("token", response.data.authorization.token);
    window.localStorage.setItem("user", response.data.user.id);
    window.location.replace("/");
  };

  getHeaders = () => {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    };
  };

  register = async (credentials) => {
    const response = await this.client.post("/auth/register", credentials);

    this.setAndRedirect(response);
    return response;
  };

  logout = async () => {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.replace("/login");
  };
}

export const authService = new AuthService();
