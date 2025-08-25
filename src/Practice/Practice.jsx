import { useState } from "react";
import TabsContainer from "./tabs/TabsContainer";
import TabPanelsContainer from "./tabs/TabPanelsContainer";

const Practice = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabsContainer value={value} handleChange={handleChange} />
      <TabPanelsContainer value={value} />
    </div>
  );
};
export default Practice;
