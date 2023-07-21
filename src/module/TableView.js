import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableView = () => {
  const [tableData, setTableData] = useState(undefined)
  useEffect(() => {
    const url = "http://127.0.0.1:5000/api/rules/us_population_data"
    axios.get(url).then((res) => {
      console.log(res.data)
      setTableData(res.data)
    })
  }, [])
  return (
    <div className='pl-[30%] p-[10px] pt-[90px]'>
      <div className='p-[40px] flex justify-center'>
        <div class="flex flex-col w-full">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Year
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Population
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      tableData && tableData.length > 0 && tableData.map((item,index) => (
                        <>
                          <tr class="bg-gray-100 border-b" key={index}>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item?.year}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item?.population}
                            </td>
                          </tr>
                        </>
                      ))
                    }
                    

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableView;
