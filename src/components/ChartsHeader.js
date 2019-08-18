import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: WP('0.1%'),
    borderTopWidth: WP('0.1%'),
    flexDirection: 'row',
    height: isIphoneX() ? HP('4.5%') : HP('5%'),
    width: '100%'
  },
  header: {
    fontSize: isIphoneX() ? HP('2%') : HP('2.2%'),
    paddingLeft: WP('1%')
  },
  nameContainer: {
    flex: 3.2,
    justifyContent: 'center'
  },
  nameStyle: {
    fontSize: HP('1.8%'),
    fontWeight: 'bold',
    paddingLeft: WP('2.5%')
  },
  percentContainer: {
    flex: 2.6,
    justifyContent: 'center'
  },
  subContainer: {
    flex: 3,
    justifyContent: 'center'
  }
})

const ChartsHeader = props => {
  const { container, header, nameContainer, percentContainer, subContainer } = styles
  return (
    <View style={container}>
      <View style={nameContainer}>
        <Text style={[header, { paddingLeft: WP('3.5%') }]}>Name</Text>
      </View>
      <View style={subContainer}>
        <Text style={header}>Last</Text>
      </View>
      <View style={subContainer}>
        <Text style={header}>Highest</Text>
      </View>
      <View style={percentContainer}>
        <Text style={header}>Percent</Text>
      </View>
    </View>
  )
}

export default ChartsHeader
