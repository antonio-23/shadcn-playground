import React from "react";
import { ModeToggle } from "./ModeToggle";
import NavTabs from "./Tabs";
import { LanguageToggle } from "./LanguageToggle";

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <h2>Logo</h2>
      <NavTabs />
      <div className='flex flex-row gap-4'>
        <LanguageToggle />
        <ModeToggle />
      </div>
    </nav>
  );
}
