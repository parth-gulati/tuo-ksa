import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function Form() {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [disableEverything, setDisableEverything] = useState(true);
  const [targetMessage, setTargetMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDisplayForm(true);
    }, 1200);
  }, []);

  useEffect(() => {
    if (selectValue == "" || selectValue == "rn") {
      setDisableEverything(true);
      setError(true);
      setErrorMessage("Abhi not possible bbydoll");
    } else {
      setDisableEverything(false);
      setErrorMessage("");
      setError(false);
      setTargetMessage(`Yes, I will go out on a date with you ${selectValue}`);
    }
  }, [selectValue]);

  const displayFormClass = displayForm ? styles.fadeIn : styles.fadeOut;

  const handleChange = (e) => {
    setInput(e.target.value);
    if (error) {
      setError(false);
      setErrorMessage("");
    }
  };

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaste = (e) => {
    setError(true);
    setErrorMessage("Gotta type it bbydoll");
    e.preventDefault();
  };

  const checkInput = () => {
    if (input === targetMessage) {
      setError(false);
      window.location.href =
        "https://codesandbox.io/s/easteregg-for-my-simp-qf9h7";

      return;
    }
    if (input.length > 0 && targetMessage.includes(input)) {
      setError(true);
      setErrorMessage("Lazy");
      return;
    }
    setError(true);
    setErrorMessage("Cmon");
  };

  return (
    <div className={styles.container}>
      <main className={[styles.main, displayFormClass].join(" ")}>
        <h1 className={styles.title2}>
          Officially asking you out on a{" "}
          <a href="https://www.urbandictionary.com/define.php?term=date">
            Date
          </a>
        </h1>

        <p className={styles.description}>
          Enter &quot;Yes, I will go out on a date with you{" "}
          <Select
            className={styles.description}
            labelId="label"
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            id="select"
            style={{ width: "150px" }}
            value={selectValue}
          >
            <MenuItem value="rn" style={{ fontStyle: "italic" }}>
              right now
            </MenuItem>
            <MenuItem value="on Wednesday">on Wednesday</MenuItem>
            <MenuItem value="on Thursday">on Thursday</MenuItem>
            <MenuItem value="on Friday">on Friday</MenuItem>
            <MenuItem value="on Saturday">on Saturday</MenuItem>
          </Select>
          &quot; in the input box below
        </p>

        <div className={styles.grid}>
          <TextField
            onPaste={handlePaste}
            className={styles.inputval}
            fullWidth={true}
            id="standard-helperText"
            label={error ? ":(" : ":)"}
            error={error}
            helperText={error ? errorMessage : undefined}
            value={input}
            disabled={disableEverything}
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <Button
            style={styles.submitButton}
            title="Because Enter Key won't work"
            color="primary"
            disabled={disableEverything}
            onClick={(e) => {
              checkInput();
            }}
          >
            {error ? "NOPPERS" : "YEPPERS"}
          </Button>
        </div>
      </main>
    </div>
  );
}
