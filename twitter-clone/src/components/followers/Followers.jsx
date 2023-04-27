import React, { useState } from "react";
import './followers.css'

const Followers = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      id: 1,
      name: "John@123 Doe",
      profilePic: "https://picsum.photos/300/300",
      username: "@johndoe",
      followed: false,
    },
    {
      id: 2,
      name: "Jane@Smith211",
      profilePic: "https://picsum.photos/id/238/150/150",
      username: "@janesmith",
      followed: false,
    },
    {
      id: 3,
      name: "Bob@Johnson",
      profilePic: "https://picsum.photos/id/239/150/150",
      username: "@bobjohnson",
      followed: false,
    },
  ]);

  const handleFollowClick = (id) => {
    setSuggestedUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <div className="follow_container">
        <h3>Who to Follow</h3>
      {suggestedUsers.map((user) => (
        <div key={user.id} className="user-container">
          
          <img src={user.profilePic} alt={user.name} className="profile-pic" />
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>{user.username}</p>
            <button onClick={() => handleFollowClick(user.id)}>
              {user.followed ? "Followed" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Followers;