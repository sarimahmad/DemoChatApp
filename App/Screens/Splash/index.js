/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    this.checkUSer();
    AsyncStorage.clear()
  }
  checkUSer = async () => {
    setTimeout(async () => {
      this.props.navigation.navigate('Login');
    }, 500);
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#282461'}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{width: 139, height: 139, borderRadius: 70, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
                <Text style={{fontSize: 18, fontWeight:'bold', color: '#282461'}}>Logo here</Text>
            </View>

          </View>
        </SafeAreaView>
      </View>
    );
  }
}
export default Splash