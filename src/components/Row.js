import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
    Animated
} from 'react-native'
import {Info} from '../Stacks/InfoStack';
import ReactCSSTransitionGroup from 'react-transition-group'; 

import Icon from 'react-native-vector-icons/FontAwesome';
import { Transition } from 'react-native-reanimated';
import SlidingComponent from './SlideComponent';
import Axios from 'axios';

export default class Row extends Component {

  constructor(props){
    super(props);
    this.state = {
      fadeAnim : 50,
      fadeAnim2 : 50,
      showInfo: false,
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      fadeAnim2: new Animated.Value(0),
    }
  }

    handleAccept = () =>{
      console.log("hererere");
      Axios.post('http://192.168.1.75:3000/order')
    }

    animatebutton(width, height) {
      Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: height,                   // Animate to opacity: 1 (opaque)
        duration: 300,              // Make it take a while
      }
    ).start();     
        Animated.timing(                  // Animate over time
      this.state.fadeAnim2,            // The animated value to drive
      {
        toValue: width,                   // Animate to opacity: 1 (opaque)
        duration: 300,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }


    toggleModal = () =>{
      return (
        <View style={styles.Info}>
              <View style={styles.buttonn}>
              <Button 
                onPress={this.handleAccept}
                title="Accept"
                color="#00cc00"
                accessibilityLabel="Learn more about this purple button"
              />
              </View>
              <View style={styles.buttonn}>
              <Button
                title="Delete"
                color="#ff3300"
                accessibilityLabel="Learn more about this purple button"
              />
              </View>
            </View>
      )
    }

    animate() {
      let width, height = 300;

      this.animatebutton(width,height);
  
    }


    handleClick = () =>{
      this.props.modifyRow(this.props.index);
     // this.setState({showInfo: !this.state.showInfo});
    }

    render(){

        const {
            place, 
            index,
            rowIndex
        } = this.props

        return (
          <View>
          <TouchableHighlight onPress={() => this.animate()}>
        <View key={place.name} style={
              {backgroundColor: index % 2 == 0 ? 'white' : '#F3F3F7'}}>
                <View style={styles.row}>
                <View >
                <Image source={require('../images/order.png')}
                   style={{marginRight: 14, height:46, width:46}}
           />
                </View>


                <View style={styles.nameAddress}>
                <Text style={{fontWeight:'bold'}}>By {place.name}</Text>
                <Text style={styles.addressText}>{`${place.info.adress.HouseNo}, ${place.info.adress.streetName}, ${place.info.adress.suburb} `}</Text>
                </View>
                <View style={styles.edges}>
                  
                  <TouchableHighlight onPress={this.infoPressed}
                                      style={styles.button} 
                                      underlayColor='#5398DC' >
                    <Text style={styles.buttonText}>Info</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
                  <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          height: this.state.fadeAnim, 
          width : this.state.fadeAnim2 ,

          

       // Bind opacity to animated value
        }}
      >
      </Animated.View>
            </View>
            </TouchableHighlight>
            </View>
    )}
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
      },
      main: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      },
      container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      edges:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
      },
      nameAddress:{
        flexDirection: 'column',
        flex: 8
      },
      addressText:{
        color: 'grey',
        fontWeight: '300'
      }, 
      Info:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'orange'
        
      },
      buttonn:{
        width: 160,
        marginRight: 20
      },
      stars: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50
      },
      button:{
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
      },
      info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
      },

      
})