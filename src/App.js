import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h1>Merhaba, {name}!</h1>
      <h2>Yaşınız: {age}</h2>
      <button onClick={()=> setName("Ahmet")}>Change Name</button>
      <button onClick={()=> setAge(30)}>Change Age</button>
    </div>
  );
}

export default App;
