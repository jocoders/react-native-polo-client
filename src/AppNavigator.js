import React from 'react'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { isIphoneX } from 'react-native-iphone-x-helper'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

import { AboutScreen } from './screens/AboutScreen'
import { ChartsScreen } from './screens/ChartsScreen'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { WP, HP } from './constants'

const AppStack = createBottomTabNavigator(
  {
    CHARTS: {
      screen: ChartsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} style={{ top: HP('0.3%') }} name="chart-histogram" size={HP('4%')} />
        ),
        tabBarLabel: 'Charts'
      })
    },
    ABOUT: {
      screen: AboutScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} style={{ top: HP('0.3%') }} name="buddhism" size={HP('4%')} />
        ),
        tabBarLabel: 'About'
      })
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      lazy: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
      style: {
        backgroundColor: '#068485',
        height: isIphoneX() ? HP('7%') : HP('8%')
      },
      labelStyle: {
        fontSize: HP('2%'),
        fontWeight: 'bold'
      }
    }
  }
)

AppStack.navigationOptions = {
  header: null
}

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Welcome: WelcomeScreen
    },
    {
      initialRouteName: 'Welcome'
    }
  )
)

export default AppNavigator
