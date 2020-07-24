import React, { useState } from "react";
import Header from "./Header";
import AddList from "./AddList";
import List from "./List";

function App() {
  const [note, setNote] = useState([]);
  function OnAddList(lists) {
    setNote(prev => {
      return [...lists];
    });
  }

  return (
    <div>
      <Header />
      <div>
        <AddList OnAdd={OnAddList} />
        {note.map(x => {
          return <List text={x} />;
        })}
      </div>
    </div>
  );
}

export default App;
