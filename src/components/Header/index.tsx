// src/components/Header/index.tsx
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { uppercase } from '../../helpers/stringHelpers';
import styles from './header.module.css';  // Make sure to import the CSS file

interface HeaderProps {
  onCreate: (newAssignmentTitle: string) => void;
}

export function Header({ onCreate }: HeaderProps) {
  const [assignmentInput, setAssignmentInput] = useState('');

  const handleCreate = () => {
    if (assignmentInput.trim()) {
      onCreate(assignmentInput);
      setAssignmentInput('');
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase('bcit')} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignmentInput}
          onChange={(e) => setAssignmentInput(e.target.value)}
        />
        <button disabled={!assignmentInput.trim()} onClick={handleCreate}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
