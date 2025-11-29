import { useState } from "react";
import Navbar from "../Navbar";

export default function NavbarExample() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10">
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}
