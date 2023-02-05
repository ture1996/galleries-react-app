import ApiService from "./ApiService";
import { authService } from "./AuthService";

class GalleryService extends ApiService {
  getAll = async (next_page) => {
    if (next_page) {
      const { data } = await this.client.get(`galleries?page=${next_page}`);
      return data;
    }
    const { data } = await this.client.get("galleries");
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`galleries/${id}`, {
      headers: authService.getHeaders(),
    });
    return data;
  };

  add = async (gallery) => {
    await this.client.post("galleries", gallery, {
      headers: authService.getHeaders(),
    });
  };

  delete = async (id) => {
    await this.client.delete(`galleries/${id}`, {
      headers: authService.getHeaders(),
    });
  };

  edit = async (id, gallery) => {
    await this.client.put(`galleries/${id}`, gallery, {
      headers: authService.getHeaders(),
    });
  };
}

export const galleryService = new GalleryService();
