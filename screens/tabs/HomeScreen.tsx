import { StyleSheet, Text, View } from "react-native";


const HomeScreen = () => {
  return <View style={styles.container}>
    <Text>This is home screen</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    marginTop: -1
  }
});
export default HomeScreen;