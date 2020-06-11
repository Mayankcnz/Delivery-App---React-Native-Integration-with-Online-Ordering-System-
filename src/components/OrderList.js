import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  UIManager,
  FlatList,
  Button
} from "react-native";
import Section from "./Section";
import axios from 'axios';

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const handleAccept = () =>{


}

const OrderList = () => {


  const [restaurants, setRestaurant] = useState([]);


  useEffect(() => {

       axios.get('http://192.168.1.75:3000/orders')
      .then(result => setRestaurant(result.data))

      console.log(restaurants);

  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

      <FlatList
             data={restaurants}
             renderItem={({item, index})=>(
             <Section title={item.name} item={item}  items={null} />

             )}
         />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  }
});

export default OrderList;



// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   Image
// } from 'react-native';

// import Row from './Row'
// import axios from 'axios'
// import { Value } from 'react-native-reanimated';


// export default class OrderList extends Component {


//   static navigationOptions = {
//     header: false
//   }

//   state = {
//     search: null,
//     restaurants: [],
//     hasError: false,
//     row: {index: -1, show: false}
//   }

//   static getDerivedStateFromError(error){
//       // update state so the next render will show the fall back UI
//       return {hasError: true};
//   }

//   componentDidMount() {

//     /**fetch('http://192.168.1.75:3000/restaurants')
//     .then(response => response.json())
//     .then(result => this.setState({restaurants : result}))
// **/
//     axios.get('http://192.168.1.75:3000/orders')
//     .then(result => this.setState({restaurants: result.data}))

//   }

//   modifyRow = (rowIndex) =>{

//    // console.log("modyfing");
//     const {index, show} = this.state.row;
//     if(index === rowIndex) return;

//     this.setState({row:{index:rowIndex, show: true}});
//   }

//   render(){

//     console.log(this.state.restaurants);

//     if(this.state.hasError){
//         return <h1> something went wrong</h1>
//     }else {
//     return (
//         <FlatList
//             data={this.state.restaurants}
//             renderItem={({item, index})=>(
//             <Row place={item} index={index} rowIndex={this.state.row} navigation={this.props.navigation} modifyRow={() =>this.modifyRow(index)} />
//             )}

//         />
//     );
//     }
//   }
// }

// const styles = StyleSheet.create({
//   header: { // inside javascript objects, which means attributes are colours needs to be in quote
//     padding: 40,
//     fontSize: 30,
//     textAlign: 'center',
//     color: '#0066CC',
//     fontWeight: '300'
//   },
//   input:{
//     padding: 10,
//     paddingHorizontal: 20,
//     fontSize: 16,
//     color: '#444',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     backgroundColor: '#F5F5F5'
//   }

// })

