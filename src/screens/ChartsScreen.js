import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, StyleSheet, View } from 'react-native'
import { ChartsHeader, CryptoItem, IconsHeader, ProjectStatusBar } from '../components'
import { useFetch } from '../hooks/useFetch'
import { WP, HP } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const ChartsScreen = ({ navigation }) => {
  const { container } = styles
  const url = 'https://poloniex.com/public?command=returnTicker'

  //*Call custom hook and data distruction
  const { data, error, loading } = useFetch(url)

  //*Change percent amount color depends on the amount
  const percentColorHandler = number => {
    return number >= 0 ? true : false
  }
  console.log('data', data)

  return (
    <View style={container}>
      {Platform.OS === 'ios' && <ProjectStatusBar />}
      <IconsHeader
        dataError={error}
        header="Charts"
        leftIconName="ios-arrow-back"
        leftIconPress={() => navigation.navigate('Welcome')}
      />
      <ChartsHeader />
      <ActivityIndicator animating={loading} color="#068485" style={{ top: HP('30%') }} size="small" />
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <CryptoItem
            name={item.key}
            highBid={item.highestBid}
            lastBid={item.last}
            percent={item.percentChange}
            percentColor={percentColorHandler(item.percentChange)}
          />
        )}
      />
    </View>
  )
}

export { ChartsScreen }
