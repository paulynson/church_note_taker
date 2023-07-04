import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="animate-pulse font-bold hover:scale-110 hover:text-navy"
        >
          Church Note Taker
        </Link>
      </div>
      <div>
        <Link
          href="/note"
          className="rounded-full bg-pry px-4 py-2 text-navy hover:bg-navy hover:text-pry"
        >
          Add a note
        </Link>
      </div>
    </nav>
  );
};

export default Header;
