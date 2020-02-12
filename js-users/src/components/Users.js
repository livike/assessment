import React, { useState, useEffect } from "react";
import * as API from "../util/server";
import UserList from "./UserList";
import Pagination from "./Pagination";
import { Box } from "grommet";
import { inverseStatus, updateUsers, sortData } from "../util/util";

// fetch the data and compose the users view
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
        setUsers(sortData(data));
        setLoading(false);
      } catch (error) {
        setError(error);
        setUsers(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  function defineCurrentUsers() {
    // Get current users
    const indexOfLastPage = currentPage * userPerPage;
    const indexOfFirstPage = indexOfLastPage - userPerPage;
    const slicedUsers = users.slice(indexOfFirstPage, indexOfLastPage);
    return slicedUsers;
  }
  const currentUsers = defineCurrentUsers();

  //for navigation
  const usersCount = users.length;
  const pagesRange = Math.ceil(usersCount / userPerPage);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const navigateStep = direction => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < pagesRange) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleStatus = async (userId, userStatus) => {
    const newStatus = inverseStatus(userStatus);
    try {
      await API.updateStatus(userId, newStatus);
      setUsers([...users, updateUsers(userId, newStatus, currentUsers)]);
    } catch (e) {
      setError(error);
    }
  };

  return (
    <Box>
      <Box alignSelf="center" margin="medium">
        <UserList
          users={currentUsers}
          toggleStatus={toggleStatus}
          allUsers={users}
        />
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
