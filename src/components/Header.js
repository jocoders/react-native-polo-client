import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('8%'),
    justifyContent: 'center',
    marginTop: isIphoneX() ? HP('1.6%') : HP('2%'),
    width: '100%'
  },
  headerStyle: {
    fontSize: HP('4%'),
    fontWeight: 'bold'
  }
})

const Header = props => {
  const { container, headerStyle } = styles
  return (
    <View style={container}>
      <Text style={headerStyle}>{props.header}</Text>
    </View>
  )
}

export default Header
