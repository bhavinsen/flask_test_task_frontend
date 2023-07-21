import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TextView = () => {
  const [textData, setTextData] = useState(undefined)
  useEffect(() => {
    const url = "http://127.0.0.1:5000/api/rules/about/"
    axios.get(url).then((res) => {
      console.log(res.data)
      setTextData(res.data)
    })
  }, [])
  return (
    <div className='pl-[30%] p-[10px] pt-[90px]'>
      <div className='p-[40px]'>
        <h2 className='mb-[30px]'>Last update : <span>{textData?.["Last update"]}</span></h2>
        <p>{textData?.text}</p>
      </div>
    </div>
  )
}

export default TextView;
