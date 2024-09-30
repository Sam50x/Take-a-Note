import { useState } from "react"

const TextArea = ({ id, active }) => {

    const [input, setInput] = useState([{
        text: "Enter Notes Here"
    }])


    const handleChange = (e) => {
        const { name, value } = e

        setInput(prev => [{
            ...prev,
            [name]: value
        }])
    }

    return (
        <div className={id === active ? 'text-area' : 'hidden'}>
            <textarea
                placeholder="Enter Notes Here"
                value={input.text}
                name='text'
                onChange={handleChange}
            ></textarea>
        </div>
    )
}

export default TextArea