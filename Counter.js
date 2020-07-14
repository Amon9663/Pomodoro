import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import Vibration from './utils/vibrate.js'

 class Counter extends React.Component { 
  
    constructor(props) {
    super(props)
    this.state = {
     
        startTime:props.time,
        count : props.time,
        counting : false,
        workState : true,
            
    }
        this.countDown = this.countDown.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.controlTimer = this.controlTimer.bind(this)
  }
  
  componentDidMount() {
  
    this.interval = setInterval(this.countDown, 1000)
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  countDown = () => {
      if (this.state.count > 0 && this.state.counting){
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
    }else if(this.state.counting){
        if (this.state.workState){
             Vibration()
        this.setState(prevState=> ({
            counting: false,
            workState : !prevState.workState,
            startTime: 300,
        }))
        }else {
            Vibration()
        this.setState(prevState=> ({
            counting: false,
            workState : !prevState.workState,
            startTime: 1500,
        }))
        }
        this.resetTimer()
             }
      
  }
   resetTimer = () => this.setState(prevState=>({
      counting : false,
        count: prevState.startTime,
   }))

controlTimer = () => this.setState(prevState => ({
    counting: !prevState.counting,
}))
    
controlState = () => {
    if(this.state.workState){
        this.setState(prevState => ({
        workState: !prevState.workState,
        startTime : 300,
}))
                      
                    }else{
        this.setState(prevState => ({
        workState: !prevState.workState,
        startTime : 1500,
}))
                    }          
            this.resetTimer()
                     }

 convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}



  render() {
    return( 
        <View>
        <Button
        title ={this.state.workState ? "WorkTime": "BreakTime"} 
        color = {this.state.workState ? "#0218A7": "#3395FF"}
        onPress={this.controlState}
        />
        <View style ={ styles.container}>
        <Text style = {styles.timerFont} >{this.convertHMS(this.state.count)} </Text>
        </View>
    
        <View style = {styles.startButton}>
        <Button 
        title={this.state.counting ? "Pause": "Start"} 
        color = {this.state.counting ? "red": "green"}
        onPress ={this.controlTimer}
        />
         </View>   
       <Button  
        title="Reset" 
        onPress ={this.resetTimer} 
        />
        </View>
      )
    
  }
 

  
  
}
const styles = StyleSheet.create({
  container: {
    width: 150,
      height: 150,
      borderRadius: 150/2,
    borderColor: "white",
      borderWidth: 5,
         alignItems: 'center',
    justifyContent: 'center',
      marginTop: 15,
      marginBottom : 15,
  
  },
timerFont:{
  fontSize: 30,
    marginLeft:10,
    color: "white",
},
startButton:{
    marginBottom: 10,
},

});
export default Counter;



