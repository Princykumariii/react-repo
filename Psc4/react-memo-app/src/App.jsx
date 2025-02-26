// import React, { useState, useEffect, useCallback } from "react";
// import Post from "./components/Post";
// import { v4 as uuidv4 } from "uuid";

// const App = () => {
//   const [timer, setTimer] = useState(0);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [posts, setPosts] = useState([]);

  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);


//   const addPost = () => {
//     if (title && body) {
//       setPosts((prev) => [
//         ...prev,
//         { id: uuidv4(), title, body, verifyPost: false },
//       ]);
//       setTitle("");
//       setBody("");
//     }
//   };

//   // Memoizing the toggle function
//   const toggleVerify = useCallback((id) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
//       )
//     );
//   }, []);

//   return (
//     <div>
//       <h2>Timer: {timer}s</h2>
//       <input
//         type="text"
//         placeholder="Post Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Post Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <button onClick={addPost}>Add Post</button>

//       <div>
//         {posts.map((post) => (
//           <Post key={post.id} post={post} toggleVerify={toggleVerify} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
 import useTimer from "./hooks/useTimer";

// const App = () => {
//   const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Timer: {timer} seconds</h2>
//       <button onClick={startTimer} disabled={isRunning}>Start</button>
//       <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };
const App = ()=>{
  const {timer,isRunning,startTimer,stopTimer,resetTimer}=useTimer()
  return(
    <div style={{background:"yellow" ,textAlign: "center", marginTop: "50px"} }>
      <h2> Timer:{timer} seconds</h2>
     <button onClick={startTimer} disabled={isRunning}>Start</button>
     <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
    </div>
  )
}

export default App;
