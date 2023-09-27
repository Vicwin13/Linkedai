import { Link } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";


export default function Navbar() {
  return (
    <div>
      <NavbarLayout>
        <Link to="/contact" className="pl-12">
          Contact
        </Link>
      </NavbarLayout>
    </div>
  );
}
