import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const SettingsHeader = ({title, navigation})=>{

    return (
        <View style={{flexDirection: 'row', marginTop: 20, height:50, backgroundColor:'orange'}}>
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
      )
    }

    