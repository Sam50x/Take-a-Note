import { useState } from 'react'

import './App.css'

import Header from './comps/Header';
import Note from './comps/Note';
import TextArea from './comps/TextArea';

function App() {
  //adding a note handling

  const [count, addOneToCount] = useState(0)
  const [noteElements, addNoteElement] = useState([])
  const [active, setActive] = useState(1)


  const handleNoteAdd = () => {
    addOneToCount(prevCount => {
      return prevCount + 1
    })

    addNoteElement(prevNoteElements => {
      return [
        ...prevNoteElements,
        {
          id: { count }
        }
      ]
    })
  }

  const handleActivateNote = (id) => {
    setActive(id)
  }

  const noteItems = noteElements.map(item => {
    return (
      <Note
        active={active}
        id={item.id}
        num={count}
        handleActivateNote={handleActivateNote}
      />
    )
  })


  const textareas = noteElements.map(item => {
    return (
      <TextArea id={item.id} active={active} />
    )
  })

  return (
    <div className="app">
      <Header
        handleAdd={handleNoteAdd}
      />
      <div className='notes'>
        {noteItems}
      </div>
      {textareas}
    </div>
  )
}

export default App;
