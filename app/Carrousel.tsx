import { Dimensions, Text, View,FlatList,StyleSheet} from 'react-native';

function Carrousel() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.Container}>
            <FlatList
                    data={[
                {key: 'PONTO1'},
                {key: 'PONTO2'},
                {key: 'PONTO3'},
                {key: 'PONTO4'},
                {key: 'PONTO5'},
                {key: 'PONTO6'},
                {key: 'PONTO7'},
            
                ]}
                renderItem={({item}) => {
                    return (
                        <View style={styles.Element}>
                            <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                {item.key}
                            </Text>
                        </View>
                    );
                }}
                horizontal={true}
                >
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'flex-start',
        overflow: 'scroll',
    },
    Element:{
        backgroundColor: 'red',
        display: 'flex',
        width: 500,
        borderWidth: 5,
        borderColor: 'black',
        height: 200,
        
        marginTop: 50,
        justifyContent: 'flex-start',
        gap: 10,
    }
  });

export default Carrousel;