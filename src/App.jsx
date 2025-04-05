import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./users";
import "./App.css";
import { Suspense } from "react";
import Friends from "./friends";
import Posts from "./posts";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json(); // returns the promise
// };

function App() {
  const postPromise = fetchPosts();
  // const friendPromise = fetchFriends();
  function handleClicked() {
    alert("I am clicked");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <section className="space-y-2">
        <Suspense
          fallback={<h3 className="text-xl font-semibold">Posts Loading...</h3>}
        >
          <Posts postPromise={postPromise}></Posts>
        </Suspense>
        {/* <Suspense
          fallback={<h3 className="text-xl font-semibold">Loading...</h3>}
        >
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>
        
        <Suspense
          fallback={
            <h3 className="text-xl font-semibold">Friends loading...</h3>
          }
        >
          <Friends friendPromise={friendPromise}></Friends>
        </Suspense> */}

        {/* <h1>Vite + React</h1>
        <button className="btn bg-amber-300 text-xl">Click me</button> <br />
        <button
          onClick={() => handleAdd5(5)}
          className="btn bg-amber-300 text-xl"
        >
          Click me
        </button> */}
        <br />
        {/* _______________________________________ */}
        <Counter></Counter>
        <Batsman></Batsman>
      </section>
    </>
  );
}

export default App;
