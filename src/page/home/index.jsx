import {
  Container,
  ContentContainer,
  Flex,
  GirlImage,
  HeaderContainer,
  Heading,
  ImageContainer,
  LeftWrapper,
  RightWrapper,
  Search,
  SearchContainer,
  SearchWrapper,
  Span,
  Paragraph,
  FilterContainer,
  FilterBox,
  Label,
  TableContainer,
  TableSection,
  Table,
  TableRow,
  TableHead,
  TableData,
  TableBody,
  PaginationContainer,
  ContentWrapper,
  FilterFlex,
} from "./style";
import { useState } from "react";
import usersDb from "../../data/db.json";
import girlImage from "../../assets/girl.webp";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/bitcoin.svg";
import { ReactComponent as EthereumIcon } from "../../assets/ethereum.svg";
import { ReactComponent as SolanaIcon } from "../../assets/solana.svg";
import { Paginate } from "../../components/paginate";
import { Navbar } from "../../components/header";
import { Footer } from "../../components/footer";

export const Home = () => {
  const [users, setUsers] = useState(usersDb.users);
  const [searchUsers, setSearchUsers] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e) => {
    setSearchUsers(e.target.value);
    if (searchUsers.length === 0) {
      setUsers(usersDb.users);
    } else {
      var searchedObject = usersDb.users.filter((user) => {
        return (
          user.name.toLowerCase().indexOf(searchUsers.toLowerCase()) !== -1 ||
          user.role.toLowerCase().indexOf(searchUsers.toLowerCase()) !== -1 ||
          user.coin.toLowerCase().indexOf(searchUsers.toLowerCase()) !== -1 ||
          user.date.toLowerCase().indexOf(searchUsers.toLowerCase()) !== -1
        );
      });
      setUsers(searchedObject);
    }
  };

  const handleFilterAll = () => {
    setUsers(usersDb.users);
  };
  const handleFilterBuyer = () => {
    var filterBuyer = usersDb.users.filter((user) => {
      return user.role.indexOf("Buyer") !== -1;
    });
    setUsers(filterBuyer);
  };
  const handleFilterSeller = () => {
    var filterSeller = usersDb.users.filter((user) => {
      return user.role.indexOf("Seller") !== -1;
    });
    setUsers(filterSeller);
  };
  const handleFilterBitcoin = () => {
    var filterBitcoin = usersDb.users.filter((user) => {
      return user.coin.indexOf("Bitcoin") !== -1;
    });
    setUsers(filterBitcoin);
  };
  const handleFilterEthereum = () => {
    var filterEthereum = usersDb.users.filter((user) => {
      return user.coin.indexOf("Ethereum") !== -1;
    });
    setUsers(filterEthereum);
  };
  const handleFilterSolana = () => {
    var filterSolana = usersDb.users.filter((user) => {
      return user.coin.indexOf("Solana") !== -1;
    });
    setUsers(filterSolana);
  };
  const groupBy = (data, key) => {
    return data.reduce((acc, item) => {
      acc[item[key]] = [...(acc[item[key]] || []), item];
      return acc;
    }, {});
  };
  const result = groupBy(users, "date");

  const listPerPage = 3;
  const TotalNumberOfPages = Math.ceil(
    (Object.keys(result).length ?? 0) / listPerPage
  );

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <HeaderContainer>
          <LeftWrapper>
            <ContentContainer>
              <Paragraph>welcome to buycoin</Paragraph>
              <Heading>
                Get Intouch with <Span>Buycoins</Span> Users
              </Heading>
              <SearchContainer>
                <SearchWrapper>
                  <SearchIcon />
                  <Search
                    className="search"
                    placeholder="Search..."
                    type="text"
                    value={searchUsers}
                    onChange={handleSearch}
                  />
                </SearchWrapper>
              </SearchContainer>
              <Flex>
                <Paragraph>Fetch: </Paragraph>
                <FilterFlex>
                  <FilterContainer>
                    <FilterBox onClick={handleFilterAll}>
                      <Label>All</Label>
                    </FilterBox>
                    <FilterBox onClick={handleFilterBuyer}>
                      <Label>Buyer</Label>
                    </FilterBox>
                    <FilterBox onClick={handleFilterSeller}>
                      <Label>Seller</Label>
                    </FilterBox>
                    <FilterBox onClick={handleFilterBitcoin}>
                      <Label>Bitcoin</Label>
                    </FilterBox>
                    <FilterBox onClick={handleFilterEthereum}>
                      <Label>Ethereum</Label>
                    </FilterBox>
                    <FilterBox onClick={handleFilterSolana}>
                      <Label>Solana</Label>
                    </FilterBox>
                  </FilterContainer>
                </FilterFlex>
              </Flex>
            </ContentContainer>
          </LeftWrapper>
          <RightWrapper>
            <ImageContainer>
              <GirlImage src={girlImage} />
            </ImageContainer>
          </RightWrapper>
        </HeaderContainer>
        <TableContainer>
          <TableSection>
            <Table>
              <TableRow>
                <TableHead id="coin">Coin</TableHead>
                <TableHead id="name">Customer Name</TableHead>
                <TableHead id="role">Role</TableHead>
                <TableHead id="date">Date</TableHead>
                <TableHead id="id">Id</TableHead>
              </TableRow>
              {Object.entries(result)
                .slice(
                  0 + (pageNumber - 1) * listPerPage,
                  listPerPage * pageNumber
                )
                .map(([date, details]) => {
                  return (
                    <TableBody key={date}>
                      <TableRow>
                        <TableData id="date-heading">{date}</TableData>
                      </TableRow>
                      {details.map((detail, index) => {
                        return (
                          <TableRow key={index}>
                            <TableData id="coinImage">
                              {detail.coin === "Bitcoin" ? (
                                <BitcoinIcon />
                              ) : detail.coin === "Ethereum" ? (
                                <EthereumIcon />
                              ) : (
                                <SolanaIcon />
                              )}

                              {detail.coin}
                            </TableData>
                            <TableData>{detail.name}</TableData>
                            <TableData>{detail.role}</TableData>
                            <TableData>{detail.date}</TableData>
                            <TableData>{detail.id}</TableData>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  );
                })}
            </Table>
          </TableSection>
        </TableContainer>
        <PaginationContainer>
          <Paginate
            totalPages={TotalNumberOfPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </PaginationContainer>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};
