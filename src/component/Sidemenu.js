import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  const [activeTab, setActiveTab] = useState(1);
  console.log("🚀🚀🚀 ~ file: Sidemenu.js:6 ~ activeTab:", activeTab);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className='fixed top-0 bottom-0 left-0 w-[30%] mt-[90px] bg-[#111827]'>
      <div className='p-[20px] h-full'>
        <Link to="/">
          <div className={`text-[25px] text-center my-[15px] rounded-[8px] p-2 cursor-pointer text-white ${activeTab === 1? "bg-[#1f2937]":"border-[2px] border-[#1f2937]"}`} onClick={() => handleTabClick(1)}>
            Text view
          </div>
        </Link>
        <Link to="table">
          <div className={`text-[25px] text-center my-[15px] rounded-[8px] p-2 cursor-pointer text-white ${activeTab === 2? "bg-[#1f2937]":"border-[2px] border-[#1f2937]"}`} onClick={() => handleTabClick(2)}>
            Table view
          </div>
        </Link>
        <Link to="chart">
          <div className={`text-[25px] text-center my-[15px] rounded-[8px] p-2 cursor-pointer text-white ${activeTab === 3? "bg-[#1f2937]":"border-[2px] border-[#1f2937]"}`} onClick={() => handleTabClick(3)}>
            Chart view
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideMenu;
