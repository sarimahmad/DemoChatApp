/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disableno-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Loader from '../../Components/Loader';
import {BLACK, GREY, ORANGE, RED, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';


var ws = new WebSocket("ws://localhost:8000/ws/chat/room/")
class Chat extends Component {
  constructor(props) {
    // this.current = React.createRef();
    super(props);
    this.state = {
      email: '',
      password: '',
      message:'',
      loading: false,
      email:'',
    };
  }

  async componentDidMount(){
    const data = await AsyncStorage.getItem('name');
    console.log(data)
    this.setState({email: data});

    ws.onmessage(e=>{
      const data = e.data
      console.log(data)
    })
    ws.onerror(e=>{
      console.log(e)
    })

  }
  hello(){
    ws.send(JSON.stringify({
      'room': "room",
      'message': this.state.message,
      'username': this.state.email,
  }));

  }

  render() {
    return (
      <View
        style={styles.wrapperView}>
          <SafeAreaView style={{flex: 1}}>
          <Text style={{textAlign:"center"}}>{this.state.email}</Text>


          <View style={{flex:1, alignItems:'center'}}>

            <TextInput
            onChangeText={(val)=> this.setState({message: val})}
            placeholder="Enter Message"
            style={{width: SCREEN.width - 100, paddingLeft:20 ,height: 40, borderWidth:1, marginVertical:20}}
            />

          <TouchableOpacity 
            onPress={()=> this.hello()}
            style={{height:40, width:SCREEN.width - 100, backgroundColor:'red', borderRadius:20}}>

            </TouchableOpacity>

          </View>

          </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
  },
  itemView:{
    width: SCREEN.width -40,
    height: 45,
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal: 15,
    backgroundColor:"#c9c8db",
    flexDirection:'row',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemTxt:{
    fontSize:12,
    fontWeight:'700',
    color: '#282461'
  }
});

export default Chat