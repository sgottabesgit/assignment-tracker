import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react'; // Import useState

export function Header() {
  const [assignmentInput, setAssignmentInput] = useState(''); // Initialize state for assignment input

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignmentInput} // Bind input value to state
          onChange={(e) => setAssignmentInput(e.target.value)} // Update state on input change
        />
        <button disabled={!assignmentInput.trim()}> {/* Disable button if input is empty or contains only spaces */}
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
