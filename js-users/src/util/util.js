export const formatDate = timestamp => {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()}`;
};

export const inverseStatus = status => {
  return status === "active" ? "locked" : "active";
};

export const updateUsers = (userId, newStatus, currentUsers) => {
  return (currentUsers.find(a => a.id == userId).status = newStatus);
};
