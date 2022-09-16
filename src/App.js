import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['Ahmet',"Mehmet","Ali"]);

  return (
    <div>
      <h1>Merhaba, {name}!</h1>
      <h2>Yaşınız: {age}</h2>
      <button onClick={()=> setName("Ahmet")}>Change Name</button>
      <button onClick={()=> setAge(30)}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend,key) =>(
          <div key={key}>{friend}</div>
        ))

      }
      <button onClick={()=> setFriends([...friends,"Haydar"])}>Add New Friend</button>
    </div>
  );
}

export default App;
