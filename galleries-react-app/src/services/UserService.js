import ApiService from "./ApiService";
import { authService } from "./AuthService";

class UserService extends ApiService {
  get = async (id, next_page) => {
    if (next_page) {
      const { data } = await this.client.get(`authors/${id}?page=${next_page}`);
      return data;
    }
    const { data } = await this.client.get(`authors/${id}`, {
      headers: authService.getHeaders(),
    });
    return data;
  };
}

export const userService = new UserService();
