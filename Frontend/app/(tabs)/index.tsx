import { Text, View , Image} from "react-native";

export default function Index() {
  return (
    <View
     className="flex-1 items-center justify-center "
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 200, height: 200 }} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
