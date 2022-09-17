import React from 'react'
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Pricing from './components/Pricing/Pricing';


export default function App() {
  return (
    <>
      <Header />
      <Pricing />
      <div className="my-5"></div>
      {/* <Table /> */}
    </>
  )
}
