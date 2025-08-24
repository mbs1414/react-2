import { Box, Typography } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...others } = props;
  return (
    <div
      role="tabPanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {value === index && (
        <Box sx={{ pa: 5 }}>
          {children}
        </Box>
      )}
    </div>
  );
};
export default TabPanel;
