import { Link } from "react-router-dom";

const listOfLinks = [
  { to: "/", displayText: "Home" },
  
];

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
      }}
    >
      {listOfLinks.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.displayText}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
