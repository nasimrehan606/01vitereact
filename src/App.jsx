import React, { useState } from "react";

export const App = () => {
  const [friends, setFriends] = useState(["Ali", "rehan"]);
  const AddFriend = () => setFriends([...friends, "Umar"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "Ali"));
  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "Rehan" ? "H.Rehan Nasim" : f)));
  };

  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={AddFriend}>Add a new friend</button>
      <button onClick={removeFriend}>Remove a friend</button>
      <button onClick={updateFriend}>Update a friend</button>
    </div>
  );
};

export default App;
