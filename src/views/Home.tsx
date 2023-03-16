import React from 'react'
import Table from '../components/home/Table'

const Home : React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Hostings</h1>
      <Table />
    </div>
  )
}

export default Home