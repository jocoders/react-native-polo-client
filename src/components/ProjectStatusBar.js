import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#068485',
    height: Constants.statusBarHeight
  }
})

const ProjectStatusBar = () => <View style={styles.statusBar} />

export default ProjectStatusBar
