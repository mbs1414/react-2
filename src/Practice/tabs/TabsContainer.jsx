import { Tab, Tabs } from "@mui/material";
import { Favorite, PersonPinCircle, Phone } from "@mui/icons-material";

const TabsContainer = ({value, handleChange}) => {
    return (
      <Tabs value={value} onChange={handleChange}>
        <Tab icon={<Phone />} label="RECENTS" />
        <Tab icon={<Favorite />} label="FAVORITES" />
        <Tab icon={<PersonPinCircle />} label="NEARBY" />
      </Tabs>
    );
}
export default TabsContainer