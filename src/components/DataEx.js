import { useState, useEffect, useLayoutEffect } from 'react'

useEffect(() => {
    console.log('Loaded')
    if (Info) { getData()}
  
    // const getData = async() => {
    
    //   const dataFromAPI = await AddInfo()
    //   setDataBlock(dataFromAPI)
    // }
    // getData()
    // const obj = JSON.parse(dataBlock)
    // console.log(obj)
  }, [])
  
const DataEx = () => {
    return (
        <div>
            
        </div>
    )
}

export default DataEx
