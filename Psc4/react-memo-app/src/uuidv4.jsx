const addPost = () => {
    if (title && body) {
      setPosts((prev) => [
        ...prev,
        { id: uuidv4(), title, body, verifyPost: false },
      ]);
      setTitle("");
      setBody("");
    }
  };
  