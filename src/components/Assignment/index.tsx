// src/components/Assignment/index.tsx
import React from 'react';
import { TbTrash } from 'react-icons/tb';

interface AssignmentProps {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
}

export function Assignment({ title, completed, onDelete, onToggleComplete }: AssignmentProps) {
  return (
    <div className="assignment">
      <button className="checkContainer" onClick={onToggleComplete}>
        <div />
      </button>
      <p>{title}</p>
      <button className="deleteButton" onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
