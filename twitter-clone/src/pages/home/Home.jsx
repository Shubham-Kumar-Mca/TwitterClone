import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import "./home.css"

const Home = () => {
  return (
    <section className='home__container'>
      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </section>
  )
}

export default Home