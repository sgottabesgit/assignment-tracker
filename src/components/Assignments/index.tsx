// src/components/Assignments/index.tsx
import React from 'react';
import { Assignment } from '../Assignment';
import styles from './assignments.module.css';  // Make sure to import the CSS file

interface AssignmentData {
  key: number;
  title: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: AssignmentData[];
  onDelete: (key: number) => void;
  onToggleComplete: (key: number) => void;
}

export function Assignments({ assignments, onDelete, onToggleComplete }: AssignmentsProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignments.filter((assignment) => assignment.completed).length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.key}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={() => onDelete(assignment.key)}
            onToggleComplete={() => onToggleComplete(assignment.key)}
          />
        ))}
      </div>
    </section>
  );
}
