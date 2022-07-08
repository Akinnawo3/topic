import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate, useLocation, useParams, useSearchParams} from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pageFromQuery = searchParams.get("page");

  const getPageNoFromQueryString = () => (pageFromQuery === null ? 1 : parseInt(pageFromQuery, 10));

  const [currentPage, setCurrentPage] = useState(getPageNoFromQueryString);
  const [posts, setPosts] = useState([]);

  const makeApiCall = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=7`)
      .then((res) => setPosts(res.data))
      .catch((e) => console.log(e));

  //   useEffect(async () => {
  //     await makeApiCall();
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      await makeApiCall();
    }
    fetchData();
  }, [currentPage]);

  const doNext = () => {
    setCurrentPage(currentPage + 1);
    navigate(`${location.pathname}?page=${currentPage + 1}`);
  };
  const doPrevious = () => setCurrentPage(currentPage - 1);
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id} onClick={() => navigate(`/posts/${item.id}`)}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
      <div>
        <button disabled={currentPage < 2} onClick={doPrevious}>
          Previous
        </button>
        <span>
          <b>{currentPage}</b>
        </span>
        <button disabled={currentPage >= 15} onClick={doNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
