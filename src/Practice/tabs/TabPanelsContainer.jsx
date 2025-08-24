import TabPanel from "../../components/tabs/TabPanel";

const TabPanelsContainer = ({value}) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        1
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
    </>
  );
};
export default TabPanelsContainer;
