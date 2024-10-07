import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Text,View } from 'react-native';
import DropdownComponent from '../Dropdown';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Carrousel from '../Carrousel';

export default function x() {
  return (
    <View style={styles.Container}>
        <View style={styles.InformationsCtn}>
           <View style={styles.InformationCtn}>
              <Text style={{marginRight:15}}>Tempo estimado</Text>
              <Text>xx:xx:xx</Text>
            </View>
            <View style={styles.InformationCtn}>
              <Text  style={{marginRight:15}}>Você está</Text>
              <DropdownComponent></DropdownComponent>
            </View>
            <Carrousel></Carrousel>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  InformationsCtn:{
    display: 'flex',
    width: '100%',
    height: 'auto',
    gap: 20,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  InformationCtn:{
    display: 'flex',
    width: '80%',
    height: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});
