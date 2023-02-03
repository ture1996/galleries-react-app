import ApiService from "./ApiService";

class GalleryService extends ApiService {
  getAll = async () => {
    const { data } = await this.client.get("galleries");
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`galleries/${id}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      }
    });
    return data;
  };

  add = async (gallery) => {
    await this.client.post('galleries',gallery,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      }
    });
  }
}

export const galleryService = new GalleryService();
