import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="cart1" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default TabsLayout;
