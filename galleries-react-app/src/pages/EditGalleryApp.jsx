import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateGalleryForm } from "../components/CreateGalleryForm";
import { galleryService } from "../services/GalleryService";

export const EditGallery = () => {
  const { id } = useParams();
  const userId = window.localStorage.getItem("user");
  const [gallery, setGallery] = useState({
    name: "",
    description: "",
    url: [""],
  });

  useEffect(() => {
    if (id && !gallery.id) {
      handleGetGallery(id);
    }
    if (gallery.id && userId != gallery.user_id) {
      window.location.replace("/");
    }
  }, [gallery.id]);

  const handleGetGallery = async (id) => {
    const data = await galleryService.get(id);
    setGallery(data);
  };

  const handleRemoveURL = (index) => {
    const { url } = gallery;
    url.splice(index, 1);
    setGallery({ ...gallery, url: url });
  };

  const handleMoveUp = (index) => {
    const urls = [...gallery.url];
    const url = gallery.url[index];
    urls.splice(index, 1);
    urls.splice(index - 1, 0, url);
    setGallery({ ...gallery, url: urls });
  };

  const handleMoveDown = (index) => {
    const urls = [...gallery.url];
    const url = gallery.url[index];
    urls.splice(index, 1);
    urls.splice(index + 1, 0, url);
    setGallery({ ...gallery, url: urls });
  };

  const handleURLChange = (e, index) => {
    const { value } = e.target;
    const { url } = gallery;
    url[index] = value;
    setGallery({ ...gallery, url: url });
  };

  const handleOnChange = (e) => {
    setGallery({ ...gallery, [e.target.name]: e.target.value });
  };

  const handleAddURL = () => {
    setGallery({ ...gallery, url: [...gallery.url, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await galleryService.edit(gallery.id, gallery);
    setGallery({ name: "", description: "", url: [""] });
    window.location.replace(`/galleries/${gallery.id}`);
  };

  return (
    <div>
      <CreateGalleryForm
        gallery={gallery}
        onChangeHandler={handleOnChange}
        removeURLHandler={handleRemoveURL}
        addURLHandler={handleAddURL}
        submitHandler={handleSubmit}
        URLChangeHandler={handleURLChange}
        moveDownHandler={handleMoveDown}
        moveUpHandler={handleMoveUp}
      />
    </div>
  );
};
