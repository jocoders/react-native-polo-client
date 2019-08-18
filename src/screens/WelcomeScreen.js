import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { BottomContainer, ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  description: {
    fontSize: WP('4%'),
    lineHeight: HP('3%'),
    left: WP('9.7%'),
    marginTop: isIphoneX() ? HP('1%') : HP('2%'),
    width: WP('79.9%')
  },
  header: {
    color: '#FFC107',
    fontSize: isIphoneX() ? HP('4.5%') : HP('5%'),
    fontWeight: 'bold',
    left: WP('9.7%'),
    marginTop: HP('8%')
  },
  iconStyle: {
    alignSelf: 'center',
    top: isIphoneX() ? HP('16%') : HP('15%')
  },
  image: {
    alignSelf: 'center',
    borderRadius: WP('2%'),
    height: isIphoneX() ? HP('22%') : HP('24%'),
    top: HP('5%'),
    width: isIphoneX() ? WP('85%') : WP('80%')
  },
  shadowStyle: {
    elevation: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14
  },
  subDescription: {
    alignSelf: 'center',
    fontSize: WP('4%'),
    lineHeight: HP('3%'),
    top: HP('12%'),
    width: WP('70%')
  },
  subHeader: {
    alignSelf: 'center',
    color: '#FFC107',
    fontSize: isIphoneX() ? HP('3.2%') : HP('3.5%'),
    fontWeight: 'bold',
    top: HP('10%')
  }
})

const WelcomeScreen = ({ navigation }) => {
  const { container, description, header, iconStyle, image, shadowStyle, subDescription, subHeader } = styles
  return (
    <View style={container}>
      {Platform.OS === 'ios' && <ProjectStatusBar />}
      <Text style={header}>Buy. Sell. Trade.</Text>
      <Text style={description}>60+ crypto assets. Now with connectivity to cards & banks.</Text>
      <View style={shadowStyle}>
        <Image style={image} source={require('../img/crypto.png')} />
      </View>
      <Text style={subHeader}>Welcome to the Betahood</Text>
      <Text style={subDescription}>Be part of our user research group and influence the future of Poloniex.</Text>
      <Icon color="black" name="finance" size={isIphoneX ? WP('23%') : WP('20%')} style={iconStyle} />
      <BottomContainer buttonTitle="START" buttonRight={WP('2%')} onPress={() => navigation.navigate('App')} />
    </View>
  )
}

export { WelcomeScreen }
