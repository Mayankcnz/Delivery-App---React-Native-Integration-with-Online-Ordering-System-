import  React, {useEffect} from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import {NewOrder} from './src/screens/NewOrder';
import {OrdersDelivered} from './src/screens/OrdersDelivered';
import {ProcessingOrders} from './src/screens/ProcessingOrders';
import {CustomHeader} from './src/Header/CustomHeader';
import OrderList from './src/components/OrderList';
import RootStackScreen from './src/Login/RootStackScreen';
import {AuthContext} from './src/components/context';
import AsyncStorage from '@react-native-community/async-storage';
import {CustomDrawerContent} from './src/components/CustomDrawerComponent';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const stack = createStackNavigator();

function OrderDrawerNavigator({navigation}){


  var style={
    backgroundColor:'orange',
    margin:0
  };

  return (
      <SafeAreaView style={{flex:1}}>
      <CustomHeader title="Orders" navigation={navigation} />
       <stack.Navigator>
      <Tab.Navigator tabBarOptions={{style:style}}>
        <Tab.Screen name="New" component={NewOrder} navigation={navigation} />
        <Tab.Screen name="Processing" component={ProcessingOrders} navigation={navigation} />
        <Tab.Screen name="Delivered" component={OrdersDelivered} navigation={navigation} />
      </Tab.Navigator>
      </stack.Navigator>
      </SafeAreaView>
  )
}

function DashBoardDrawerNavigator({navigation}){

  var style={
    backgroundColor:'orange'
  };

  return (
      <SafeAreaView style={{flex:1}}>
      <CustomHeader title="Dashboard" navigation={navigation} />
      <ScrollView>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
       </View>
       </ScrollView>
      </SafeAreaView>
  )

}

function SettingsDrawerNavigator({navigation}){
  
  var style={
    backgroundColor:'orange'
  };

  return (
      <SafeAreaView style={{flex:1}}>
      <CustomHeader title="Settings" navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
       </View>
      </SafeAreaView>
  )
}

const App = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (currentState, action) => {
    switch(action.type) {

      case 'RETRIEVE_TOKEN':
        return {
          ...currentState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...currentState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          ...currentState,
          userName: action.id,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return{
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() =>({
    signIn: async(foundUser) =>{


      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try{
        await AsyncStorage.setItem('userToken', userToken);
      }catch(e){
        console.log(e);
      }

      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },

    signOut: async() =>{
      try{
        await AsyncStorage.removeItem('userToken');
      }catch (e) {
        console.log(e);
      }

      dispatch({type: 'LOGOUT'});
    },

    signUP: () =>{
    }
  }), []);

  

  useEffect(() =>{

    setTimeout(async() =>{

      let userToken;
      userToken;
      userToken = null;

      try{
        userToken = await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log(e);
      }

      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if(loginState.isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (

<AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken !== null ? (
        <Drawer.Navigator initialRouteName="Menu"  drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="DashBoard" component={DashBoardDrawerNavigator} />
            <Drawer.Screen name="Orders" component={OrderDrawerNavigator} />
            <Drawer.Screen name="Settings" component={SettingsDrawerNavigator} />
        </Drawer.Navigator>): 
        
          <RootStackScreen />}
    
    </NavigationContainer>
</AuthContext.Provider>

  );
}

export default App;
