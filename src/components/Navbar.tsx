import React from "react";
import { ModeToggle } from "./ModeToggle";
import NavTabs from "./Tabs";

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <h2>Logo</h2>
      <NavTabs />
      <ModeToggle />
    </nav>
  );
}
