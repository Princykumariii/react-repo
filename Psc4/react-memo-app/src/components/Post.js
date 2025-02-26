import React from "react";

const Post = ({ post, toggleVerify }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
};


export default React.memo(Post);
