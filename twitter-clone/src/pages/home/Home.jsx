import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Followers from '../../components/followers/Followers'
import Search from '../../components/search/Search'
import Feed from '../../components/feed/Feed'
import "./home.css"

const Home = () => {
  return (
    <section className='home__container'>
      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />


      {/* Right Section */}
      <div>
        <Search />
        <Followers />
      </div>
    </section>
  )
}

export default Home