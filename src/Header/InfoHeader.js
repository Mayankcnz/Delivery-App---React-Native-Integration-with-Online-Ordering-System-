import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const InfoHeader = ({title, navigation})=>{

    return (
        <View style={{flexDirection: 'row', marginTop: 20, height:50, backgroundColor:'orange'}}>
          <View style={{flex: 0.5, justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=> navigation.goBack()}>
            <Image style={{marginLeft: 28, width:26, height:26}}
              source={require('../images/back.png')}
              resizeMode="contain"
             />
             Back
             </TouchableOpacity>
          </View>
          <View style={{flex: 1.5 ,justifyContent:'center'}}>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      )
    }

    