// src/App.tsx
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Assignments } from './components/Assignments';

interface AssignmentProps {
  key: number;
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<AssignmentProps[]>([]);

  const generateUniqueKey = () => Math.floor(Math.random() * 1000);

  const onCreate = (newAssignmentTitle: string) => {
    const newAssignment: AssignmentProps = {
      key: generateUniqueKey(),
      title: newAssignmentTitle,
      completed: false,
    };

    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };

  const handleDelete = (key: number) => {
    setAssignments((prevAssignments) => prevAssignments.filter((assignment) => assignment.key !== key));
  };

  const handleToggleComplete = (key: number) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.key === key ? { ...assignment, completed: !assignment.completed } : assignment
      )
    );
  };

  return (
    <>
      <Header onCreate={onCreate} />
      <Assignments assignments={assignments} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
    </>
  );
}

export default App;
