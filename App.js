import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 

      <View style={{ margin: 30 }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: 'blue' 
        }}>
          M. Teguh Wijaksono
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
  },
});


/*export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.rowContainer}>
        <View style={styles.biru} />
        <View style={styles.kuning} />
      </View>

    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    alignItems: 'center', 
  },
  biru: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
  kuning: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
});
*/