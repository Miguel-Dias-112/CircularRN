import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Text,View,StatusBar,NativeModules  } from 'react-native';
import DropdownComponent from '../components/Dropdown';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Carrousel from '../components/Carrousel';

export default function x() {
  return (
    
    <View style={styles.App}>
         <View style={styles.PlaceHolder}>

         </View>
        <Text style={styles.Tittle}>Cadê o Circular</Text>
        <View style={styles.InformationsCtn}>
           <View style={styles.InformationCtn}>
              <Text style={styles.TextInfo}>Previsão de chegada</Text>
              <Text  style={styles.Text}>xx:xx:xx</Text>
            </View>
            <View style={styles.InformationCtn}>
              <Text style={styles.TextInfo}>Tempo Restante</Text>
              <Text  style={styles.Text}>xx:xx:xx</Text>
            </View>
            <View style={styles.InformationCtn}>
              <Text  style={styles.TextInfo}>Você está</Text>
              <DropdownComponent></DropdownComponent>
            </View>
        </View>
        <View style={styles.CarrouselCtn}>
          <Carrousel></Carrousel>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  PlaceHolder:{
    height: 50,
    width: '100%',
    backgroundColor: 'orange'
  },
  Tittle:{
    fontSize: 30,
    marginTop:-10,
    padding: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    marginRight: 10,
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
    width:'100%', 
  },
  Text:{
    fontSize: 20,
  },
  TextInfo:{
    fontSize: 20,
    padding:10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: 'orange',
  },
  App:{
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    
    gap: 10,
    alignItems: 'center',
  },
  InformationsCtn:{
    display: 'flex',
    width: '100%',
    height: '50%',
    gap: 20,
    paddingTop: 40,
    justifyContent: 'flex-start',
    
    

    alignItems: 'center',
  },
  InformationCtn:{

    display: 'flex',
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  CarrouselCtn:{
    display: 'flex',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',

  }
});
