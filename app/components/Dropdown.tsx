import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import '../src/CadeCircular'
import CadeCircular2 from '../src/CadeCircular';
  const data =     CadeCircular2.nomes.map((nome, index) => {
    return { label: nome, value: index.toString() };
  });

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={data[0].label}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          CadeCircular2.yourPos=parseInt(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      width: 200,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      
    },
    icon: {
      marginRight: 5,
      display:"none"
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
        display:"none",
      height: 0,
      fontSize: 16,
    },
  });
