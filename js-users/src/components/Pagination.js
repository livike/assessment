import React from "react";
import { Box, Button, Text } from "grommet";

const Pagination = ({ pagesRange, currentPage, paginate, navigateStep }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pagesRange; i++) {
    pageNumbers.push(i);
  }
  // console.log("pageNumbers", pageNumbers);
  return (
    <Box>
      <Box direction="row" alignSelf="center">
        <Box pad="medium">
          <Button onClick={() => navigateStep("prev")}>Prev</Button>
        </Box>

        <Box pad="medium">
          <Button onClick={() => navigateStep("next")}>Next</Button>
        </Box>
      </Box>
      <Box alignSelf="center">
        <Text>
          Page {currentPage} of {pagesRange}
        </Text>
      </Box>
    </Box>
  );
};

export default Pagination;
