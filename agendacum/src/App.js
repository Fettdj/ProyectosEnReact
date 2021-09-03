import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
    <section className = 'container'>
      <h3>{people.length} cumpleañeros!</h3>
      <List people = {people} />
      <button onClick = {() => setPeople([])}>Limpiar Todo</button>
    </section>
  </main>;
}

export default App;
