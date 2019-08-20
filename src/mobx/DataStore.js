import { createContext } from 'react'
import { action, decorate, observable, computed, runInAction } from 'mobx'
import mapObjects from '../utils/mapObjects'

class DataStore {
  data = null
  error = false
  loading = true
  
  @action async fetchData(url) {
  this.data = null
  this.error = false
  this.loading = true
    try {
      console.log('TRY')
      const response = await fetch(url)
      const jsonResponse = await response.json()
      const obj = await mapObjects(jsonResponse)
      runInAction(() => {
        console.log('WRITE!!!')
        this.loading = false
        this.data = obj
      })
    } catch (err) {
      runInAction(() => {
        console.log(err)
        this.loading = false
        this.error = err
      })
    }
  }
}

decorate(DataStore, {
  data: observable,
  error: observable,
  loading: observable,
  fetchData: action
})
export default createContext(new DataStore())
