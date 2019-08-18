import React from 'react'
import { StyleSheet, Platform, Text, View } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  amountStyle: {
    fontSize: isIphoneX() ? HP('1.4%') : HP('1.6%')
  },
  container: {
    borderBottomWidth: WP('0.1%'),
    flexDirection: 'row',
    height: isIphoneX() ? HP('4%') : HP('4.5%'),
    width: '100%'
  },
  nameContainer: {
    flex: 3.2,
    justifyContent: 'center'
  },
  nameStyle: {
    fontSize: isIphoneX() ? HP('1.4%') : HP('1.7%'),
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

//*A little bit of magic :))
//*React.memo HOC renders the component and memoizes the result
const CryptoItem = React.memo(props => {
  const { amountStyle, container, nameContainer, nameStyle, percentContainer, subContainer } = styles
  const { name, highBid, lastBid, percent, percentColor } = props
  return (
    <View style={container}>
      <View style={nameContainer}>
        <Text style={nameStyle}>{name}</Text>
      </View>
      <View style={subContainer}>
        <Text style={amountStyle}>{lastBid}</Text>
      </View>
      <View style={subContainer}>
        <Text style={amountStyle}>{highBid}</Text>
      </View>
      <View style={percentContainer}>
        <Text style={[amountStyle, { color: percentColor ? '#2AA3A3' : '#E2595B' }]}>{percent}</Text>
      </View>
    </View>
  )
})

export default CryptoItem
