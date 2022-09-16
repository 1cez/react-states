import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet", "Ali"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34000 });

  return (
    <div>
      <h1>Merhaba, {name}!</h1>
      <h2>Yaşınız: {age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(30)}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Haydar"])}>
        Add New Friend
      </button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br></br>

      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 30253 })}
      >
        Change The Address
      </button>
    </div>
  );
}

export default App;
