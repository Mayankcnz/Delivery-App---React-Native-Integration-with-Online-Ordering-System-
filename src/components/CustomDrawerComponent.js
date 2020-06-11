import  React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {AuthContext} from '../components/context';



export const CustomDrawerContent = (props) =>{  


    const {signOut} = React.useContext(AuthContext);

    const logOut = () =>{
        signOut();

    }

    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{height: 180, flexDirection:'column', backgroundColor:'orange'}}>
          <Image source={require('../images/deliveryBoy.png')}
          style={{marginTop: 30, marginLeft: 15, justifyContent: 'flex-start',height:80, width:80, borderRadius:60, borderColor:'black', borderWidth:1, }}
           />
           <Text style={{marginTop:5, marginLeft:5, fontSize:24, color:'white', fontWeight:'bold'}}>Mayank Chander</Text>
           <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'300'}}>Delivery Boy</Text>
        </View>
        <ScrollView style={{marginLeft: 5}}>
          <TouchableOpacity
          style={{marginTop: 20}}
          onPress={()=> props.navigation.navigate('DashBoard')}
          >
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../images/dashboard.png')}
            style={{marginTop: 6, marginLeft: 6, justifyContent: 'flex-start',height:24, width:24}}
             />
          <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'300'}}>DashBoard</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Orders')}
          >
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Octicons style={{marginLeft: 8, marginTop: 6}} 
                      name="checklist"
                      size={32}
                  />
          <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'300'}}>Orders</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={{marginTop: 20}}
          onPress={()=> props.navigation.navigate('Settings')}
          >
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../images/settings.png')}
            style={{marginTop: 5, marginLeft: 5, justifyContent: 'flex-start',height:26, width:26}}
             />
          <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'300'}}>Settings</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => logOut()}
          style={{marginTop: 20}}
          
          >
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <FontAwesome style={{marginLeft: 8, marginTop: 6}} 
                      name="sign-out"
                      size={24}
                  />
            
          <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'300'}}>Sign Out</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }