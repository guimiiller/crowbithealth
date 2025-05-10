import Main from '@/components/Main';
import Title from '@/components/Title';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Title />
        <Main />
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  }
});
