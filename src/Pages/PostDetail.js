import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  const getPost = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((e) => console.log(e));

  //   useEffect(async () => {
  //     await makeApiCall();
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      await getPost();
    }
    fetchData();
  }, []);

  console.log(post);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
