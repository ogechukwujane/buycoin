import { useState } from "react";
import "./style.css";
import usersDb from "../../data/db.json";
import { Paginate } from "./component/paginate";

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
          user.currency.toLowerCase().indexOf(searchUsers.toLowerCase()) !==
            -1 ||
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
      return user.currency.indexOf("Bitcoin") !== -1;
    });
    setUsers(filterBitcoin);
  };
  const handleFilterEthereum = () => {
    var filterEthereum = usersDb.users.filter((user) => {
      return user.currency.indexOf("Ethereum") !== -1;
    });
    setUsers(filterEthereum);
  };
  const handleFilterBNB = () => {
    var filterBnb = usersDb.users.filter((user) => {
      return user.currency.indexOf("BNB") !== -1;
    });
    setUsers(filterBnb);
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
    <div className="container">
      <div className="header">
        <p className="logo">BUYCOINS</p>
        <div className="search-wrapper">
          <input
            className="search"
            placeholder="Search..."
            type="text"
            value={searchUsers}
            onChange={handleSearch}
          />
        </div>
        <div className="flex">
          <div className="filter-container">
            <div className="filter-box" onClick={handleFilterAll}>
              <p className="label">All</p>
            </div>
            <div className="filter-box" onClick={handleFilterBuyer}>
              <p className="label">Buyer</p>
            </div>
            <div className="filter-box" onClick={handleFilterSeller}>
              <p className="label">Seller</p>
            </div>
            <div className="filter-box" onClick={handleFilterBitcoin}>
              <p className="label">Bitcoin</p>
            </div>
            <div className="filter-box" onClick={handleFilterEthereum}>
              <p className="label">Ethereum</p>
            </div>
            <div className="filter-box" onClick={handleFilterBNB}>
              <p className="label">BNB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <div className="table-section">
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Currency</th>
              <th>Date</th>
            </tr>
            {Object.entries(result)
              .slice(
                0 + (pageNumber - 1) * listPerPage,
                listPerPage * pageNumber
              )
              .map(([date, details]) => {
                return (
                  <tfoot key={date}>
                    <tr>
                      <td className="date-heading">{date}</td>
                    </tr>
                    {details.map((detail, index) => {
                      return (
                        <tr key={index}>
                          <td>{detail.id}</td>
                          <td>{detail.name}</td>
                          <td>{detail.role}</td>
                          <td>{detail.currency}</td>
                          <td>{detail.date}</td>
                        </tr>
                      );
                    })}
                  </tfoot>
                );
              })}
          </table>
        </div>
      </div>
      <Paginate
        totalPages={TotalNumberOfPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
