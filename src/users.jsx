import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div className="border-2 border-red-600 rounded-xl m-2.5 p-2.5">
          <h3>Users: {users.length }</h3>
    </div>
  );
}
