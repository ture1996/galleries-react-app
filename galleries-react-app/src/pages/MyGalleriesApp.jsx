import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectAuthor } from "../app/authors/selectors";
import { getUserGalleries } from "../app/authors/slice";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { userService } from "../services/UserService";

export const MyGalleries = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectAuthor);
  const userId = window.localStorage.getItem("user");
  const [next_page, setNext_page] = useState(2);
  const [loadMoreActive, setLoadMoreActive] = useState(1);
  const [pagination, setPagination] = useState([
    { id: 0, url: [""], user: { id: 0 } },
  ]);

  useEffect(() => {
    console.log(userId);
    if (userId) {
      dispatch(getUserGalleries(userId));
    }
  }, [userId]);

  useEffect(()=>{
    setPagination(galleries.data);
  },[galleries])

  const updatePagination = async (page) => {
    const { data } = await userService.get(userId, page);
    setNext_page(next_page + 1);
    setPagination([...pagination, ...data]);
    if (next_page == galleries.last_page) {
      setLoadMoreActive(0);
    }
  };

  return (
    <div>
      {pagination &&
      <ul id="remove">
        {pagination.map((gallery) => (
          <li key={gallery.id}>
            <GalleriesDetails gallery={gallery} />
          </li>
        ))}
      </ul>}
      {!loadMoreActive || galleries.last_page == 1? (
        ""
      ) : (
        <button type="button" onClick={() => updatePagination(next_page)}>
          Load more
        </button>
      )}
    </div>
  );
};
