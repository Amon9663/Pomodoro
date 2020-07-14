import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants'
import PropTypes from 'prop-types'
import Counter from './Counter.js'


export default class App extends React.Component {
    constructor(props){
      super(props) 
          this.state = {
              switchCounter : true,
          }
       }
    
    
  toggleCounter = () => this.setState(prevState => ({
    switchCounter: !prevState.switchCounter,
  }))
 


    render() {
        
    return (
    
    <View style={styles.container}>
   <View style = {styles.timer2} >
      <Text style ={styles.pomoTitle}>Pomodoro Timer</Text>
     
      <View style={styles.timer} >
      <Counter time = {1500} />
       
      </View>
      </View>
    </View>
  )
      
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  
  },
timer2:{

    paddingTop: Constants.statusBarHeight+5,
    
    
},   
pomoTitle:{
    fontSize: 48,
    color: "white",
    textAlign: 'center',
    
     
    
},   

timer:{
    flexDirection:'column',
    alignItems: 'center',
    
    paddingTop: 10,
},    
});
