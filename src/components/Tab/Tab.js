import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import './TabStyle.css'
import { useState } from 'react'
import HourlyResults from '../HourlyWeather/HourlyResults'
import SevenDayWeatherResults from '../SevenDayWeather/SevenDayWeatherResults'

const NavTab = ({weathers}) => {

    const [tabIndex, setTabIndex] = useState(0)
    return (

        /*<Tabs
            className="tab-container"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >*/
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
                <Tab>Hourly</Tab>
                <Tab>Weekly</Tab>
            </TabList>
                <TabPanel>{weathers && <HourlyResults weathers ={weathers} />}</TabPanel>
                <TabPanel>{weathers && <SevenDayWeatherResults weathers ={weathers} />}</TabPanel>
            {/*<Tab eventKey="hourly" label="Hourly" id="hourly-tab-style">
               {weathers && <HourlyResults weathers ={weathers} />}
            </Tab>
            <Tab eventKey="weekly" label="Weekly" id="weekly-tab-style">
                {weathers && <SevenDayWeatherResults weathers ={weathers} />}
            </Tab>*/}
        </Tabs>
    )
}

export default NavTab
