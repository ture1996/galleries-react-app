import ApiService from "./ApiService";
import { authService } from "./AuthService";

class CommentService extends ApiService {
  delete = async (id) => {
    const { data } = await this.client.delete(`galleries/comments/${id}`, {
      headers: authService.getHeaders(),
    });
    return data;
  };

  add = async (id, comment) => {
    await this.client.post(`galleries/${id}/comments`, comment, {
      headers: authService.getHeaders(),
    });
  };
}

export const commentService = new CommentService();
