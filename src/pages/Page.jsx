import { Box, Typography } from "@mui/material";

const Page = (props) => {
  const { children, value, index, ...others } = props;
  return (
    <div
      role="Page"
      hidden={value !== index}
      id={`Page-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {value === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};
export default Page;
