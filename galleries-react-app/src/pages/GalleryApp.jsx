import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeSelectGallery } from "../app/galleries/selectors";
import { getSingleGallery } from "../app/galleries/slice";
import { CreateCommentForm } from "../components/CreateCommentForm";
import { GalleryDetails } from "../components/GalleryDetails";
import { commentService } from "../services/CommentService";
import { galleryService } from "../services/GalleryService";

export const Gallery = () => {
  const [comment, setComment] = useState({ body: "" });

  const [index, setIndex] = useState(0);

  const selectHandler = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const dispatch = useDispatch();
  const userId = window.localStorage.getItem("user");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSingleGallery(id));
    }
  }, [id]);

  const gallery = useSelector(makeSelectGallery);

  const handleOnChange = (e) => {
    setComment({ ...comment, body: e.target.value });
    console.log(comment);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await commentService.add(id, comment);
    setComment({ body: "" });
    dispatch(getSingleGallery(id));
  };

  const deleteCommentHandler = async (comment) => {
    if (window.confirm("Do you want to delete your comment?")) {
      await commentService.delete(comment.id);
      dispatch(getSingleGallery(comment.gallery_id));
    }
  };

  const deleteGalleryHandler = async (id) => {
    if (window.confirm("Do you want to delete your gallery?")) {
      await galleryService.delete(id);
      window.location.replace("/my-galleries");
    }
  };

  return (
    <div>
      <GalleryDetails
        gallery={gallery}
        user={gallery.user}
        comments={gallery.comments}
        handleSelect={selectHandler}
        index={index}
        userId={userId}
        handleDeleteComment={deleteCommentHandler}
        handleDeleteGallery={deleteGalleryHandler}
      />
      <CreateCommentForm
        comment={comment}
        onChangeHandler={handleOnChange}
        submitHandler={handleSubmit}
      />
    </div>
  );
};
