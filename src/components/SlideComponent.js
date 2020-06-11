
import React, {Component} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing
} from 'react-native'

const expandWidth = 200
const expandHeight = 200

export default class SlidingComponent extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    fadeAnim2: new Animated.Value(0),
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
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim,fadeAnim2 } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          height: fadeAnim, 
          width : fadeAnim2 ,

          

       // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

