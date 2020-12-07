import React from "react";
import { HeaderProps } from "../../interface";
import { getAll } from "../../services/urlServices";
import "./footer.css";

const Footer: React.FC<HeaderProps> = ({ setResults, setPending }) => {
  const handleOnClick = async () => {
    setPending(true);
    setResults(await getAll());
    setPending(false);
  };
  return (
    <footer>
      <h1>Boost your links today</h1>
      <button onClick={handleOnClick}>Get Links</button>
    </footer>
  );
};

export default Footer;
