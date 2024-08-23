import { useState, useEffect } from "react";
import axios from "axios";
import "./fetch.css";

function AppFetch() {
  //
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [currentID, setCurrentID] = useState();

  //
  //hh

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("posts", res.data);
      setPosts(res.data);
    }
    getPosts();
  }, []);

  //
  //HIII

  async function getComment(postid) {
    const index = posts.findIndex((post) => post.id == postid);

    if (!posts[index].comment) {

      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
      );
      console.log("comment", res.data);
      const newPosts = [...posts];
      newPosts.splice(index, 1, { ...posts[index], comment: res.data });
      setPosts(newPosts);
    }
  }

  //
  //

  const handleComment = (postid) => {
    getComment(postid);
    setCurrentID(postid);
  };

  //
  //

  return (
    <>
      <div className="container">
        {posts.map((post) => {
          return (
            <>
              <div className="wrapper" key={post.id}>
                <div className="post" key={post.id}>
                  <div key={post.id}>
                    {post.id}. {post.title}
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        handleComment(post.id);
                      }}
                    >
                      Comments
                    </button>
                  </div>
                </div>

                {post.comment ? (
                  <div
                    className="comment"
                    style={post.id == currentID ? {} : { display: "none" }}
                    key={post.id}
                  >
                    {post.comment.map((cmt) => {
                      return (
                        <>
                          {cmt.name} : {cmt.body} <br />
                          <br />
                        </>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AppFetch;