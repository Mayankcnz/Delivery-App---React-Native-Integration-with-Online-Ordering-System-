import * as React from 'react';
import {DashboardHeader} from './DashboardHeader'
import {OrdersHeader} from './OrdersHeader'
import {SettingsHeader} from './SettingsHeader'

export const CustomHeader = ({title, navigation})=>{
    console.log(title, "title");
    switch (title) {
        case 'Orders':
          return <OrdersHeader title="Orders" navigation={navigation} />;
        case 'Settings':
          return <SettingsHeader title="Settings" navigation={navigation} />;
        default:
          return <DashboardHeader title="Dashboard" navigation={navigation} />;
      }

}