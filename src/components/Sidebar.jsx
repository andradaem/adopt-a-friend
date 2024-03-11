import NavItem from "./NavItem";

import { MdPets } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";


function Sidebar() {
  return (
    <aside className="pets-sidebar">
      <nav>
        <ul>
          <NavItem path="/" text="Pets" icon={<MdPets />} />
          <NavItem path="/team" text="Team" icon={<FaPeopleGroup />} />
          <NavItem path="/contact" text="Contact" icon={<BiSolidContact />} />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
