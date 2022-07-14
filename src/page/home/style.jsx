import styled from "styled-components";

export const Container = styled.div`
  ::before {
    content: "";
    position: absolute;
    background: #efefef;
    width: 60%;
    max-height: 100vh;
    min-height: 100vh;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    z-index: -100;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 425px) {
      max-height: 85vh;
      min-height: 85vh;
    }
  }
  ::after {
    content: "";
    position: absolute;
    background: white;
    width: 40%;
    right: 0px;
    top: 0px;
    max-height: 100vh;
    min-height: 100vh;
    z-index: -100;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const ContentWrapper = styled.div`
  margin: 0px 100px;
  @media (max-width: 1024px) {
    margin: 0px 50px;
  }
  @media (max-width: 425px) {
    margin: 0px 20px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
`;
export const LeftWrapper = styled.div`
  position: relative;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RightWrapper = styled.div`
  width: 40%;
  max-height: 100vh;
  min-height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContentContainer = styled.div`
  margin-top: 10vh;
`;
export const ImageContainer = styled.div`
  position: absolute;

  width: 100%;
  z-index: -60;

  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  overflow: hidden;
`;
export const GirlImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-right: 50px;
  max-height: 80vh;
  min-height: 80vh;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 25px;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
export const Heading = styled.h2`
  margin: 20px 0px;
  font-family: 700;
  font-size: 70px;
  @media (max-width: 425px) {
    font-size: 35px;
  }
`;
export const Span = styled.span`
  color: #b38cfc;
`;
export const SearchContainer = styled.div`
  margin: 50px 0px;
  padding: 30px 40px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  @media (max-width: 768px) {
    width: unset;
  }
  @media (max-width: 425px) {
    padding: 20px 20px;
    margin: 50px 0px 30px 0px;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 2vh;
    left: 16px;
  }
`;
export const Search = styled.input`
  width: calc(100% - 40px);
  border: none;
  height: 7vh;
  background: #faf9f9;
  font-size: 16px;
  padding-left: 40px;
  ::placeholder {
    margin-left: 25px;
  }
`;
export const Flex = styled.div`
  width: calc(100% - 0px);
  display: flex;
  column-gap: 10px;
`;
export const FilterFlex = styled.div`
  display: flex;
  width: calc(100% - 0px);
  display: flex;
  column-gap: 10px;
  @media (max-width: 768px) {
    max-width: calc(100% - 70px);
    min-width: calc(100% - 70px);
    overflow-x: scroll;
  }
`;
export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  margin: auto 0px;
  @media (max-width: 425px) {
    min-width: 160vw;
  }
`;
export const FilterBox = styled.div`
  width: 60vw;
  padding: 8px 0px;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b38cfc1a;
  color: black;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
    color: #b38cfc;
    background: #b38cfc1a;
  }
`;
export const Label = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
export const TableContainer = styled.div`
  margin-top: 96px;
  background: white;
  @media (max-width: 425px) {
    max-width: 100%;
    min-width: 100%;
    overflow-x: scroll;
  }
`;
export const TableSection = styled.div`
  @media (max-width: 425px) {
    width: 220vw;
  }
  @media (max-width: 320px) {
    width: 250vw;
  }
`;
export const DateHeading = styled.td`
  font-weight: 700;
  font-size: 16px;
  margin-top: 20px;
`;
export const Table = styled.table`
  text-align: left;
  border-collapse: collapse;
  padding: 0px;
  #coin {
    width: 25%;
  }
  #name {
    width: 30%;
  }
  #role {
    width: 15%;
  }
  #date {
    width: 25%;
  }
  #id {
    width: 5%;
  }
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  #coinImage {
    align-items: center;
    display: flex;
    column-gap: 10px;
  }
  #date-heading {
    font-weight: 700;
    font-size: 16px;
  }
`;
export const TableHead = styled.th`
  padding: 15px;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.25);
`;
export const TableData = styled.td`
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  svg {
    width: 10%;
    height: 10%;
  }
`;
export const PaginationContainer = styled.div`
  margin: 20px 0px;
`;
