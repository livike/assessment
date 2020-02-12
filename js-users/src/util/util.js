export const formatDate = timestamp => {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()}`;
};

export const inverseStatus = status => {
  return status === "active" ? "locked" : "active";
};

export const updateUsers = (
  users,
  userId,
  currentPage,
  newStatus,
  currentUsers
) => {
  console.log("updateUsers function");
  let updatedUser = currentUsers.find(a => a.id == userId);
  updatedUser.status = newStatus;
  updatedUser.updated = "updated";
  console.log("updatedUser", updatedUser);

  const getIndexOfFirstUser = currentPage => {
    if (currentPage === 1) {
      return currentPage - 1;
    } else if (currentPage > 1) {
      return (currentPage - 1) * 10;
    }
  };

  const indexOfFirstUser = getIndexOfFirstUser(currentPage);

  for (let i = indexOfFirstUser; i <= indexOfFirstUser + 10; i++) {
    if (users[i].id === userId) {
      console.log(`users ${i} before ${users[i]}`);
      users[i] = updatedUser;
      console.log(`users ${i} after`, users[i]);
    }
  }

  const newArray = users;
  console.log("newArray", newArray);
  return newArray;
};
