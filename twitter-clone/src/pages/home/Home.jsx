import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Followers from '../../components/followers/Followers'
import Search from '../../components/search/Search'
import Feed from '../../components/feed/Feed'
import "./home.css"
import { Rightside1 } from '../../components/Rightpart/Rightside1'

const Home = () => {
  return (
    <section className='home__container'>
      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />


      {/* Right Section */}
      <div className='right__section'>
        <Search />
        <Rightside1 />
        <Followers />
      </div>
    </section>
  )
}

export default Home