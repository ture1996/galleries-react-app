import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeSelectAuthor } from "../app/authors/selectors";
import { getUserGalleries } from "../app/authors/slice";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { userService } from "../services/UserService";

export const Author = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [next_page, setNext_page] = useState(2);
  const [loadMoreActive, setLoadMoreActive] = useState(1);
  const data = useSelector(makeSelectAuthor);
  const [pagination, setPagination] = useState([{ id: 0, url: [""] }]);

  useEffect(() => {
    if (id) {
      dispatch(getUserGalleries(id));
    }
  }, [id]);

  useEffect(() => {
    setPagination(data.data);
  }, [data]);

  const updatePagination = async (page) => {
    const { data } = await userService.get(id, page);
    setNext_page(next_page + 1);
    setPagination([...pagination, ...data]);
    if (next_page == data.last_page ) {
      setLoadMoreActive(0);
    }
  };

  return (
    <div>
      {pagination && (
        <ul id="remove">
          {pagination.map((gallery) => (
            <li key={gallery.id}>
              <GalleriesDetails gallery={gallery} />
            </li>
          ))}
        </ul>
      )}
      {!loadMoreActive || data.last_page == 1 || next_page > data.last_page ? (
        ""
      ) : (
        <button type="button" onClick={() => updatePagination(next_page)}>
          Load more
        </button>
      )}
    </div>
  );
};
