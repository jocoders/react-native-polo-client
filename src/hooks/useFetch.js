import { useEffect, useState } from 'react'
import mapObjects from '../utils/mapObjects'

//*Custom hook for fetch data from API
export const useFetch = url => {
  const [state, setState] = useState({ data: null, error: false, loading: true })

  //*Fetch data function wrapped to setInterval
  //and useEffect hook for side effects
  useEffect(() => {
    const interval = setInterval(() => {
      setState(state => ({ data: state.data, error: false, loading: true }))
      fetch(url)
        .then(data => data.json())
        .then(obj => mapObjects(obj))
        .then(newData => setState({ data: newData, error: false, loading: false }))
        .catch(function(error) {
          console.log(error)
          setState({ data: null, error: true, loading: false })
        })
    }, 2000)

    //*Clear interval for the component unmounting
    return () => clearInterval(interval)
  }, [state])

  return state
}
