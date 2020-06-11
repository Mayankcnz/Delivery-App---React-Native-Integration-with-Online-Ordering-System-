import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native";


import { createStackNavigator } from '@react-navigation/stack';

const Section = ({ title, items, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(item, "item");

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, []);


  const showMap = () =>{

  }

  return (
    <View>
      <TouchableOpacity onPress={toggleOpen} style={styles.heading}>
         <Text>Order from: {title}</Text>
        <Text style={styles.plusMinus}>{isOpen ? "-" : "+"}</Text>
      </TouchableOpacity>
      <View style={[styles.list, !isOpen ? styles.hidden :undefined]}>
        {isOpen ? <View >
              <Button 
                title="Accept"
                color="#00cc00"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                title="Delete"
                color="#ff3300"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={{ flex: 1 }}>
              <Button
                onPress={showMap}
                title="Show Location"
                color="black"
                />
               
                 </View>
            </View> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#e0aa8d',
    borderBottomWidth: 4,
    borderBottomColor: '#967a39'

  },
  hidden: {
    height: 0,
  },
  list: {
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 1,
  },
  item: {
    height: 30,
    paddingHorizontal: 10,
  },
  plusMinus: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#858583"
  }
});

export default Section;