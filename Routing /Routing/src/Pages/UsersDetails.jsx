import { useParams } from "react-router-dom";

const users = {
  1: "Alice",
  2: "Bob",
  3: "Charlie",
};

const UserDetails = () => {
  const { id } = useParams();
  const userName = users[id];

  if (!userName) {
    return <h2 className="text-center text-2xl mt-10">User not found!</h2>;
  }

  return (
    <h2 className="text-center text-2xl mt-10">
      Details of {userName} (ID: {id})
    </h2>
  );
};

export default UserDetails;
