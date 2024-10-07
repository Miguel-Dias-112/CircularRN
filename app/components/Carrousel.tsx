import { Dimensions, Text, View,FlatList,StyleSheet,AppState} from 'react-native';
import CadeCircular from '../src/CadeCircular';
import { useState ,useRef} from 'react';
import CadeCircular2 from '../src/CadeCircular';
function Carrousel() {
    const data = CadeCircular2.nomes.map((nome, index) => {
        return { key: nome, value: index.toString() };
    })
    const flatListRef = useRef<FlatList<{ key: string; value: string }> | null>(null);
    const [Postion, setPostion] = useState(CadeCircular2.yourPos);

    let scrollOnce= true   ;
    setInterval(() => {
        setPostion(CadeCircular2.yourPos);
        if(scrollOnce){
            flatListRef.current?.scrollToOffset({ animated: true, offset: Postion * 300 });
            scrollOnce=false;
            return;
        }
    }, 100);
    return (
        <View style={styles.Container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({item}) => {
                    if(Postion==parseInt(item.value)){
                        return (
                            <View style={styles.Element}>
                                <View style={styles.Ball}></View>
                                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                    {item.key}
                                </Text>
                            </View>
                        );
                    }
                    else {
                        return (
                            <View style={styles.Element}>
                                <View style={styles.BlankBall}></View>
                                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                    {item.key}
                                </Text>
                            </View>
                        );
                    }
                }}
                horizontal={true}
                >
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    Ball:{
        width: 50,
        height: 50,
        backgroundColor: 'blue',

    },
    BlankBall:{
        width: 50,
        height: 50,
        display: 'none',
        backgroundColor: 'none',
        borderRadius: 50,
    },
    Container:{
        display: 'flex',
        width: '90%',
        borderWidth: 9,
        borderRadius: 10,
        borderColor: 'orange',
        height: "auto",
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
        overflow: 'scroll',
        flexDirection: 'column',
    },
    Element:{
        display: 'flex',
        width: 300,
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'black',
        height: 200,
        borderRightWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
  });

export default Carrousel;