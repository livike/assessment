import React, { useState, useEffect } from "react";
import * as API from "../util/server";
import UserList from "./UserList";
import Pagination from "./Pagination";
import { Box } from "grommet";

// fetch the data and compose the users view
const handlePageChange = page => {
  console.log("page ", page);
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setUsers(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  //Get current users
  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;
  const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);
  const usersCount = users.length;
  const pagesRange = Math.ceil(usersCount / userPerPage);

  // console.log("usersCount", usersCount);
  // console.log("userPerPage", userPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const navigateStep = direction => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < pagesRange) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <Box>
      <Box alignSelf="center" margin="medium">
        <UserList users={currentUsers} />
        <Pagination
          pagesRange={pagesRange}
          currentPage={currentPage}
          paginate={paginate}
          navigateStep={navigateStep}
        />
      </Box>
    </Box>
  );
};

export default Users;
