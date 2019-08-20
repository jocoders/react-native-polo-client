const fetchData = async () => {
  try {
    const response = await fetch('https://poloniex.com/public?command=returnTicker')
    return response
  } catch(err){
    console.log
    return err
  }
}

export default fetchData
