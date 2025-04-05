import { use } from "react";
import Friend from "./friend";
export default function Friends({ friendPromise }) {
  const friends = use(friendPromise);
  console.log(friends); 
  return (
    <div className="border-2 border-green-500 rounded-xl m-2.5 p-2.5">
          <h3>Friend { friends.length}</h3>
          {
              friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
          }
    </div>
  );
}
