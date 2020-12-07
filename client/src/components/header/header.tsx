import React from "react";
import { getAll } from "../../services/urlServices";
import { HeaderProps } from "../../interface";
import "./header.css";

const Header: React.FC<HeaderProps> = ({ setResults, setPending }) => {
  const handleOnClick = async () => {
    setPending(true);
    setResults(await getAll());
    setPending(false);
  };
  return (
    <header>
      <h1 className="main-title">Shortly</h1>
      <div className="header">
        <div className="header__left">
          <h1 className="title">More than just</h1>
          <h1 className="title">shorter links</h1>
          <p className="text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn" onClick={handleOnClick}>
            Get Links
          </button>
        </div>
        <div className="header__right"></div>
      </div>
    </header>
  );
};

export default Header;
