import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Form() {

  const [displayForm, setDisplayForm] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setDisplayForm(true)
    },1200)
  },[])

  const displayFormClass = displayForm ? styles.fadeIn : styles.fadeOut

  const handleChange = (e)=>{
    setInput(e.target.value)
    if(error){
      setError(false)
      setErrorMessage('')
    }
  }

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaste = (e) =>{
    setError(true)
    setErrorMessage("Gotta type it bbydoll")
    e.preventDefault();
  }

  const checkInput = () =>{
    if(input==="Yes, I will go out on a date with you on Sunday"){
      setError(false);
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

      return;
    }
    if(input.length>0 && "Yes, I will go out on a date with you on Sunday".includes(input)){
        setError(true);
        setErrorMessage("Lazy");  
        return;  
    }
    setError(true);
    setErrorMessage("Cmon");
  }

  return (
    <div className={styles.container}>
      <main className={[styles.main, displayFormClass].join(' ')}>
        <h1 className={styles.title2}>
          Officially asking you out on a <a href="https://www.urbandictionary.com/define.php?term=date">Date</a>
        </h1>

        <p className={styles.description}>
          Enter 	&quot;Yes, I will go out on a date with you on Sunday&quot; in the input box below
        </p>

        <div className={styles.grid}>
        <TextField
          onPaste={handlePaste}
          className={styles.inputval}
          fullWidth={true}
          id="standard-helperText"
          label={error? ":(" : ":)"}
          error={error}
          helperText={error? errorMessage : undefined}
          value={input}
          onChange={handleChange}
        />
        </div>
        <div className={styles.grid}>
        <Button title="Because Enter Key won't work" color="primary" onClick={(e)=>{checkInput()}}>Yeppers</Button>
        
        </div>
      </main>
    </div>
  )
}
