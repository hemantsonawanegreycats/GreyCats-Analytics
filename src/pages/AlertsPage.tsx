import PagesEmptyPlaceHolder from '@/components/PagesEmptyPlaceHolder'
import React from 'react'

import { FaBell } from 'react-icons/fa6'
import { MdOutlineNotificationsActive } from 'react-icons/md'


function AlertsPage():React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col">
    <div className="w-full h-[4.8em] bg-white border-b flex justify-between items-center px-5 ">
      <span className="font-medium text-xl">Alerts</span>
    
    </div>


    <div className="flex flex-1 justify-center  items-center">
        <PagesEmptyPlaceHolder
          Header={"No Alerts Yet!"}
          subHeader="Stay informed with instant updates and notifications."
          pointers={["Set up custom alerts", "Get real-time updates", "Stay ahead always"]}
          smallIcon={FaBell}
          bigIcon={MdOutlineNotificationsActive}
          buttonText="Create Alert"
        />
      </div>
    </div>
  )
}

export default AlertsPage
