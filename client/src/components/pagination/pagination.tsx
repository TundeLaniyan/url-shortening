import React from "react";
import "./pagination.css";

interface PaginationProps {
  results: {}[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({
  results,
  page,
  setPage,
  limit,
}) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page < 2}>
        {"<"}
      </button>
      <div>
        {page} / {Math.ceil(results.length / limit)}
      </div>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= Math.ceil(results.length / limit)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
