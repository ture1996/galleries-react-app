import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectGalleries } from "../app/galleries/selectors";
import { getAllGalleries } from "../app/galleries/slice";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { galleryService } from "../services/GalleryService";

export const Galleries = () => {
  const dispatch = useDispatch();
  const [next_page, setNext_page] = useState(2);
  const [loadMoreActive, setLoadMoreActive] = useState(1);
  const current_page = useSelector(makeSelectGalleries);

  useEffect(() => {
    dispatch(getAllGalleries());
  }, []);

  useEffect(() => {
    setPagination(current_page.data);
    
  }, [current_page]);

  const [pagination, setPagination] = useState([
    { id: 0, url: [""], user: { id: 0 } },
  ]);

  const updatePagination = async (page) => {
    const { data } = await galleryService.getAll(page);
    setNext_page(next_page + 1);
    setPagination([...pagination, ...data]);
    if (next_page == current_page.last_page || next_page > current_page.last_page) {
      setLoadMoreActive(0);
    }
  };

  return (
    <div>
      {pagination && (
        <ul id="remove">
          {pagination.map((gallery) => (
            <li key={gallery.id}>
              <GalleriesDetails gallery={gallery} user={gallery.user} />
            </li>
          ))}
        </ul>
      )}
      {(!loadMoreActive || current_page.last_page == 1) ? (
        ""
      ) : (
        <button type="button" onClick={() => updatePagination(next_page)}>
          Load more
        </button>
      )}
    </div>
  );
};
