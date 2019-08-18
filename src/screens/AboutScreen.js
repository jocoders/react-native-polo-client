import React from 'react'
import { Button, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Header, ProjectStatusBar } from '../components'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  description: {
    fontSize: WP('4%'),
    lineHeight: HP('3%'),
    top: HP('6%'),
    width: WP('80%')
  },
  descriptionContainer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    color: '#FFC107',
    fontSize: isIphoneX() ? HP('3%') : HP('3.5%'),
    fontWeight: 'bold',
    top: HP('5%')
  },
  image: {
    alignSelf: 'center',
    borderRadius: WP('2%'),
    height: isIphoneX() ? HP('20%') : HP('25%'),
    width: WP('85%')
  },
  line: {
    alignSelf: 'center',
    backgroundColor: '#068485',
    height: HP('0.2%'),
    top: HP('25%'),
    width: WP('30%')
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17
  },
  text: {
    fontSize: 15
  }
})
const AboutScreen = () => {
  const { container, description, descriptionContainer, header, image, shadowStyle } = styles
  const padding = [descriptionContainer, { paddingTop: HP('3%') }]
  return (
    <View style={container}>
      {Platform.OS === 'ios' && <ProjectStatusBar />}
      <Header header="About" />
      <ScrollView style={{ marginTop: HP('1%') }}>
        <View style={shadowStyle}>
          <Image source={require('../img/pool.png')} style={image} />
        </View>
        <View style={descriptionContainer}>
          <Text style={header}>Trade with a trusted partner</Text>
          <Text style={description}>
            Since 2014, we’ve been dedicated to giving traders and hodlers a safe place to trade and store
            cryptocurrencies like BTC, ETH and the best altcoins on the market.
          </Text>
        </View>
        <View style={padding}>
          <Text style={header}>Responsible</Text>
          <Text style={description}>
            To protect our customers, we work with regulators and industry peers to set standards and best practices.
          </Text>
        </View>
        <View style={padding}>
          <Text style={header}>Insured</Text>
          <Text style={description}>We have insurance coverage for the crypto assets on our platform.</Text>
        </View>
        <View style={padding}>
          <Text style={header}>Secure</Text>
          <Text style={description}>
            We’re deeply committed to security and store a significant portion of customer funds offline.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export { AboutScreen }
