import React, { useMemo } from "react";

const Post = React.memo(({ post, toggleVerify }) => {

  const backgroundColor = useMemo(() => {
    return `hsl(${Math.random() * 360}, 70%, 80%)`;
  }, []);

  return (
    <div style={{ backgroundColor, padding: "10px", margin: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
