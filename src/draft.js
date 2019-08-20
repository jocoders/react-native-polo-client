import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, StyleSheet, View } from 'react-native'
import DataStore from '../mobx/DataStore'
import { autorun } from 'mobx'
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
  const store = useContext(DataStore)
  const url = 'https://poloniex.com/public?command=returnTicker'

  console.log('store', store)
  useEffect(() => {
    store.fetchData(url)
  }, [])
  //*Call custom hook and data distruction
  //const { data, error, loading } = useFetch(url)

  //*Change percent amount color depends on the amount
  const percentColorHandler = number => {
    return number >= 0 ? true : false
  }

  return (
    <View style={container}>
      {Platform.OS === 'ios' && <ProjectStatusBar />}
      <IconsHeader
        dataError={store.error}
        header="Charts"
        leftIconName="ios-arrow-back"
        leftIconPress={() => navigation.navigate('Welcome')}
      />
      <ChartsHeader />
      <ActivityIndicator animating={store.loading} color="#068485" style={{ top: HP('30%') }} size="small" />
      <FlatList
        data={store.data}
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
