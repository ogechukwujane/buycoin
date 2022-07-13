import "./style.css";

export const Paginate = ({ totalPages, pageNumber, setPageNumber }) => {
  const handleShowPrevious = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleShowNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="pagination">
      <div className="backArrowWrap" onClick={handleShowPrevious}>
        <p>{"<"}</p>
        <p>{"<"}</p>
      </div>
      <div className="pageButton">
        {pageNumber} / {totalPages}
      </div>
      <div className="rightArrowWrap" onClick={handleShowNext}>
        <p>{">"}</p>
        <p>{">"}</p>
      </div>
    </div>
  );
};
