// src/components/Assignment/index.tsx
import styles from "./assignment.module.css";
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';


interface AssignmentProps {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
}

export function Assignment({ title, completed, onDelete, onToggleComplete }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onToggleComplete}>
        {completed ? <BsCheck size={20} /> : <div />}
      </button>
      <p className={completed ? styles.textCompleted : ''}>{title}</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
