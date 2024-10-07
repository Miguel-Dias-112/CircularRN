import { Image, TextInput,StyleSheet, Text,View, Pressable} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.View}>
      <View style={styles.ViewInput}>
        <Text style={styles.Text}>Email:</Text>
        <TextInput
          style={styles.Input}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Text style={styles.Text}>Senha:</Text>
        <TextInput
          style={styles.Input}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.ViewButtons}>
          <Pressable style={styles.Button} onPress={()=>{}}>
            <Text>Login</Text>
          </Pressable>
      </View>
      <image></image>
      
    </View>
  );
}

const styles = StyleSheet.create({
  View:{
    backgroundColor: 'White',
    display: 'flex',
    height: '100%',
    marginTop: 50,
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  ViewInput:{
    backgroundColor: 'White',
    display: 'flex',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tittle:{
    width:"80%",
    height:50,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
    alignItems: 'center',
  },
  Text:{
    width:"100%",
    height:"auto",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Button:{
    backgroundColor: 'white',
    width:"100%",
    height:60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
  ViewButtons:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width:"60%",
  },
  Input:{
    width:"100%",
    height:30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderCurve: 'circular',

  }
});
