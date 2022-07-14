import { useMemo } from "react";
import styled from "styled-components";

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

  const PageList = useMemo(() => {
    let pageArr = [];
    const num = Math.floor(pageNumber / 6);
    for (let i = 6 * num; i < 6 + 6 * num; i++) {
      if (i > totalPages) break;
      if (i === 0) continue;
      pageArr.push(i);
    }
    return pageArr;
  }, [totalPages, pageNumber]);

  return (
    <Container>
      <BackArrowWrap onClick={handleShowPrevious}>
        <p>{"<"}</p>
        <p>{"<"}</p>
      </BackArrowWrap>
      {PageList.map((pageItem, index) => (
        <PageButton
          key={index}
          isActive={pageNumber === pageItem}
          onClick={() => setPageNumber(pageItem)}
        >
          {pageItem}
        </PageButton>
      ))}
      <RightArrowWrap onClick={handleShowNext}>
        <p>{">"}</p>
        <p>{">"}</p>
      </RightArrowWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: flex-end;
  align-items: center;
`;
const BackArrowWrap = styled.div`
  display: flex;
  height: 25px;
  cursor: pointer;
  margin-right: 5px;
`;
const RightArrowWrap = styled(BackArrowWrap)`
  margin: 0px 0px 0px 5px;
`;
const PageButton = styled.button`
  background: ${({ isActive }) => (isActive ? "#b38cfc" : "transparent")};
  color: ${({ isActive }) => (isActive ? "white" : "gray")};
  border: none;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
