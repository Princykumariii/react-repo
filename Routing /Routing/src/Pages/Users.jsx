import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const Users = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-4">Users List</h1>
      <ul className="text-lg">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
