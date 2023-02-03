import { useEffect, useState } from "react";
import { CreateGalleryForm } from "../components/CreateGalleryForm";
import { galleryService } from "../services/GalleryService";

export const CreateGallery = () => {
  const [gallery, setGallery] = useState({
    name: "",
    description: "",
    url: [""],
  });

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

  const handleRemoveURL = (index) => {
    const { url } = gallery;
    url.splice(index, 1);
    setGallery({ ...gallery, url: url });
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
    await galleryService.add(gallery);
    window.location.replace("/");
  };

  return (
    <CreateGalleryForm
      gallery={gallery}
      onChangeHandler={handleOnChange}
      removeURLHandler={handleRemoveURL}
      addURLHandler={handleAddURL}
      submitHandler={handleSubmit}
      URLChangeHandler={handleURLChange}
    />
  );
};
