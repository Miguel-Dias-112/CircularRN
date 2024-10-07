import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Letras', value: '1' },
    { label: 'Ru', value: '2' },
    { label: 'Direito', value: '3' },
    { label: 'Fac. Educação', value: '4' },
    { label: 'Faefid', value: '5' },
    { label: 'Odonto', value: '6' },
    { label: 'HU', value: '7' },
  ];

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
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
         // setValue(item.value);
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
