import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export const DashboardHeader = ({title, navigation})=>{

    return (
    <Animatable.View animation="bounceIn" style={{flexDirection:'column', marginTop: 20, height: 200, backgroundColor: 'orange', justifyContent:'center'}}>
        <View style={{flexDirection: 'row', height:50, backgroundColor:'orange'}}>
          <View style={{flex: 0.5, justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=> navigation.openDrawer()}>
            <Image style={{marginLeft: 28, width:26, height:26}}
              source={require('../images/open-menu.png')}
              resizeMode="contain"
             />
             </TouchableOpacity>
          </View>
          <View style={{flex: 1.5 ,justifyContent:'center'}}>
            <Text style={{textAlign: 'left', fontSize:20, fontWeight:'bold'}}>{title}</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        <View style={{alignItems:'center'}}> 
        <Image source={require('../images/deliveryBoy.png')}
        style={{height:80, width:80, borderRadius:60, borderColor:'black', borderWidth:1, }}
         />
         <Text style={{marginTop:5, marginLeft:5, fontSize:24, color:'white', fontWeight:'bold'}}>Mayank Chander</Text>
         <Text style={{marginTop:5, marginLeft:5, fontSize:18, fontWeight:'bold'}}>Delivery Boy</Text>
        </View>
        </Animatable.View>
      )
    }

    