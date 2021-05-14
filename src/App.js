import React from 'react'
import SearchBox from './components/SearchBox';
import IPInfo from './components/IPInfo';
import DisplayMap from './components/DisplayMap';

import "./sass/main.scss";
import 'leaflet/dist/leaflet.css'
function App() {
  return (
    <>
      <SearchBox />
      <IPInfo />
      <DisplayMap />
    </>
  )
}

export default App
