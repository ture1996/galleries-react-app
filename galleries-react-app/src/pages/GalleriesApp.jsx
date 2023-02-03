import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectGalleries } from "../app/galleries/selectors";
import { getAllGalleries } from "../app/galleries/slice";
import { GalleriesDetails } from "../components/GalleriesDetails";

export const Galleries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGalleries());
  }, []);

  const galleries = useSelector(makeSelectGalleries);

  return (
    <div>
      <ul id="remove">
        {galleries.map((gallery) => (
          <li key={gallery.id}>
            <GalleriesDetails gallery={gallery} user={gallery.user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
