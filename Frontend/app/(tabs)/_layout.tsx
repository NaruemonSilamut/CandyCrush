import { Tabs, usePathname, Redirect } from "expo-router";
import TabBar from "../components/TabBar";


const TabsLayout = () => {
 
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    />
  );
};

export default TabsLayout;