const mapObjects = obj => {
  const res = Object.keys(obj).map(key => {
    let newData = obj[key]
    newData.key = key
    return newData
  })
  return res
}

export default mapObjects
