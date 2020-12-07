import React, { useState } from "react";
import { HeaderProps } from "../../interface";
import { addUrl } from "../../services/urlServices";
import "./search.css";

const Search: React.FC<HeaderProps> = ({ setResults, setPending }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const handleOnClick = async () => {
    if (!state) return setError("Please add a link");
    setPending(true);
    const url = await addUrl(state);
    if (url.message) {
      setState("");
      setError(url.message);
    } else {
      setResults([url]);
      setError("");
    }
    setPending(false);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={
          error
            ? { borderColor: "hsl(0, 87%, 67%)", outline: "hsl(0, 87%, 67%)" }
            : {}
        }
      />
      <button onClick={handleOnClick}>Shorten it!</button>
      <div className="error">{error}</div>
    </div>
  );
};

export default Search;
