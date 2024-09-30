import { useState } from 'react'



const Note = ({ id, num, handleActivateNote, active }) => {

    //changing note's name handling

    const [noteName, setNoteName] = useState({
        'noteName': `Note ${num}`
    })

    const handleRename = (e) => {
        const { value, name } = e.target

        setNoteName(prevName => {
            return {
                ...prevName,
                [name]: value
            }
        })
    }




    return (
        <div
            className={active === id ? 'note active' : 'note'}
            onClick={() => handleActivateNote(id)}
        >
            <input
                value={noteName.noteName}
                type="text"
                name='noteName'
                onChange={handleRename}
            />
        </div>
    )
}


export default Note