import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import Pagination from "../pagination/pagination";
import "./results.css";

interface ResultsProps {
  results: { longUrl: string; shortUrl: string }[];
  pending: boolean;
}

const Results: React.FC<ResultsProps> = ({ results, pending }) => {
  const [copy, setCopy] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const itemsRef = useRef<Array<HTMLTextAreaElement | null>>([]);
  const limit = 3;

  const handleOnClick = (i: number) => {
    itemsRef.current[i]!.select();
    document.execCommand("copy");
    setCopy(i);
  };

  return (
    <div className="results">
      {pending && (
        <ReactLoading
          type="spinningBubbles"
          color="hsl(180, 66%, 49%)"
          height="50%"
          width="100%"
        />
      )}
      {results.length > limit && (
        <Pagination
          results={results}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      )}
      {results
        .map((cur, i) => (
          <div className="results__items" key={i}>
            <div className="longUrl">{cur.longUrl}</div>
            <textarea
              className="shortUrl"
              ref={(el) => (itemsRef.current[i] = el)}
              value={`${window.location.origin}/${cur.shortUrl}`}
              readOnly
            />
            <button
              onClick={() => handleOnClick(i)}
              style={
                copy === i ? { backgroundColor: "hsl(257, 27%, 26%)" } : {}
              }
            >
              {copy === i ? "copied!" : "copy"}
            </button>
          </div>
        ))
        .slice((page - 1) * limit, page * limit)}
      {results.length > limit && (
        <Pagination
          results={results}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      )}
    </div>
  );
};

export default Results;
