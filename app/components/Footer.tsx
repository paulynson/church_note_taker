import React from "react";

const Footer = () => {
  const date = new Date();
  const presentYear = date.getFullYear();
  return (
    <div className="mt-16 flex items-center justify-center bg-navy py-4 text-pry">
      &copy; {presentYear} Church Note Taker
    </div>
  );
};

export default Footer;
