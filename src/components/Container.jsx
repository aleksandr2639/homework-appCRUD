import Textarea from './Textarea';
import List from './List';
import { useState, useEffect } from 'react';
const _URL = "http://localhost:7070";

const Container = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    updateNotes();
  }, []);

  const addNotes = async (content) => {
    await fetch(`${_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
    updateNotes();
  }

  const updateNotes = async () => {
    const response = await fetch(`${_URL}/notes`);
    const list = await response.json();
    setList(list);
  }

  const deleteNote = async (id) => {
    await fetch(`${_URL}/notes/${id}`, {
      method: "DELETE",
    });
    updateNotes();
  }

  return (
    <>
      <h1>Notes</h1>
      <button className="btn btn_update"  onClick={()=>{updateNotes()}}></button>
      <Textarea addNotes={addNotes}/>
      <List list={list} deleteNote={deleteNote}/>
    </>
  )
}

export default Container;