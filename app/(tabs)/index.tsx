import { Image, TextInput,StyleSheet, Text,View, Button} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.View}>
      <Text style={styles.Tittle}>Login Screen</Text>
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
        <Button
        title="Login"
        color="black"
        accessibilityLabel="Learn more about this purple button">
          
        </Button>
        <Button  
        title="olhadiha"
        color="black"
        accessibilityLabel="Learn more about this purple button">
          
        </Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  View:{
    backgroundColor: 'White',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    gap: "10%",
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
    backgroundColor: 'yellow',
    width:"80%",
    height:50,
    display: 'flex',
    justifyContent: 'center',
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
    height:30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewButtons:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  Input:{
    width:"100%",
    height:30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderCurve: 'circular',

  }
});
