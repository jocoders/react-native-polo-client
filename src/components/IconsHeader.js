import React from 'react'
import { StyleSheet, Platform, Text, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HP('8%'),
    justifyContent: 'space-between',
    marginTop: HP('1%'),
    width: '100%'
  },
  errorStyle: {
    color: 'red',
    flex: 1,
    fontSize: HP('3%'),
    paddingRight: WP('3%'),
    paddingTop: HP('2.5%')
  },
  headerStyle: {
    fontSize: HP('4%'),
    fontWeight: 'bold',
    flex: 1
  },
  iconContainer: {
    flex: 1
  }
})

const IconsHeader = props => {
  const { container, errorContainer, errorStyle, headerStyle, iconContainer } = styles
  const { dataError, header, leftIconName, leftIconPress } = props
  let leftIcon = null
  let error = null
  if (leftIconName) {
    leftIcon = <Ionicons color="#068485" name={leftIconName} size={WP('10%')} style={{ paddingLeft: WP('3%') }} />
  }
  return (
    <View style={container}>
      <View style={iconContainer}>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity onPress={leftIconPress}>{leftIcon}</TouchableOpacity>
        ) : (
          <TouchableNativeFeedback onPress={leftIconPress}>{leftIcon}</TouchableNativeFeedback>
        )}
      </View>
      <Text style={headerStyle}>{header}</Text>
      <View style={errorContainer}>
        <Text style={[errorStyle, { opacity: dataError ? 1 : 0 }]}>Data Error!</Text>
      </View>
    </View>
  )
}

export default IconsHeader
