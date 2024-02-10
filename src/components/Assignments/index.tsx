// src/components/Assignments/index.tsx
import React from 'react';
import { Assignment } from '../Assignment';

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
    <section className="assignments">
      <header className="header">
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>
        <div>
          <p className="textPurple">Completed Assignments</p>
          <span>
            {assignments.filter((assignment) => assignment.completed).length} of {assignments.length}
          </span>
        </div>
      </header>
      <div className="list">
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
