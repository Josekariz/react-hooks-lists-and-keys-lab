import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const dataLink = links.map((link, index) => {
    return (
      <nav key={index}>
        <a href={"#"+link}>{link}</a>
      </nav>
    );
  });
  return dataLink;
}

export default NavBar;
