import { useState } from "react";

function Footer() {
  const [name] = useState("Movie");

  return (
    <>
      <br />
      <hr />
      <h3>{name} Footer</h3>
    </>
  );
}

export default Footer;
