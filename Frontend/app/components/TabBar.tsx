import { View, StyleSheet, Image } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";


const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  const icon = {
    home: (
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" }}
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
      />
    ),
    cart1: (
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/263/263142.png" }}
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
      />
    ),
    account: (
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png" }}
        style={{ width: 30, height: 30,}}
        resizeMode="contain"
      />
    ),
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.tabbar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabbarItem}
            >
              <View
                style={
                  isFocused
                    ? [styles.activeCircle, styles.center]
                    : styles.center
                }
              >
                {
                  // @ts-ignore
                  icon[route.name]
                }
              </View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", 
    backgroundColor: "#292929",  //สีแทบ
    borderTopWidth: 0,
    marginTop: -10,
    borderTopColor: "#292929",
    height: 90,
    width: '100%',
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: "#C4C3F7",
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  
});

export default TabBar;
