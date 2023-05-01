import React, { useContext, useEffect, useState } from 'react'
import "./feed.css";
import TweetBox from '../tweetBox/TweetBox';
import Post from '../post/Post';
// import {  useSelector } from "react-redux";
import { AuthContext } from '../../context/AuthContextProvider';

const Feed = () => {
  // const [post, setPost] = useState(findCurrentUser.data.slice().reverse());
  const {userData}  = useContext(AuthContext)


  // const { isLoading } = useSelector(state => state.tweet)
  const findCurrentUser = userData.find(user=>user.isAuth);
  const [updatedTweets, setUpdatedTweets] = useState(findCurrentUser.data)

  // useEffect(() => {
  //   const updatedUser = userData.map(user => {
  //     if (user.userPhone === findCurrentUser.userPhone) {
  //       const reversedDataArray = post.slice().reverse();
  //       return { ...user, data: reversedDataArray }
  //     } else {
  //       return user
  //     }
  //   })
  //   setUserData(updatedUser)
  // }, [post.length])

  /* 

  useEffect(() => {
    const copyTweetedData = [...twwetsData]
    if (usersData.length === 0) return;
    const copyUpdated = copyTweetedData.map((user, index) => ({
      ...user,
      userImage: usersData[index % usersData.length].image
    }))
    setUpdated(copyUpdated)
  }, [usersData])

  */


  const toggleLike = (index) => {
    const currentTweet = {...updatedTweets[index], isLiked : !updatedTweets[index].isLiked}
    const updatTweets = [...updatedTweets]
    currentTweet.isLiked ? currentTweet.likeCount++ : currentTweet.likeCount--;
    updatTweets[index] = currentTweet
    setUpdatedTweets(updatTweets)
  }

  useEffect(()=>{
    setUpdatedTweets(findCurrentUser.data)
  },[findCurrentUser.data])


  return (
    <div className='feed' >
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox  />

      {/* {isLoading ? <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</h2> : <> */}
        {updatedTweets &&
          updatedTweets.map((singleUser, index) => (
            <Post key={index} displayName={singleUser.tweetedBy?.name} emoji = {singleUser.emoji} varified={singleUser.isVarified} text={singleUser.content} avatar={singleUser.tweetedBy.userImage} image={singleUser.image} like={singleUser.likeCount} comment={singleUser.commentCount} reTweet={singleUser.reTweetsCount} isLike={singleUser.isLiked} toggleLikeValue={() => toggleLike(index)} username = {singleUser.tweetedBy.username === undefined ? singleUser.tweetedBy?.name.split(" ")[0] + Math.floor(Math.random() * 9000) + 1000 : singleUser.tweetedBy.username}/>
          ))
        }
      {/* </>} */}

    </div>
  )
}

export default Feed