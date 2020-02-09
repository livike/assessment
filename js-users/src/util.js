export const formatDate = timestamp => {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()}`;
};
