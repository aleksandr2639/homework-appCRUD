import { useState } from "react";

const Textarea = ({ addNotes }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') return;
        addNotes(value)
        setValue('')
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
           <textarea value={value} onChange={handleChange} id="content" name="content" placeholder="Enter your message..." cols="25" rows="5" className="textarea" required></textarea>
           <div className="buttons">
              <button className="btn btn_add"></button>
           </div>
        </form>
    )
}

export default Textarea;