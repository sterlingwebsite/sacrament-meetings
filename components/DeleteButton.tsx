"use client";

import { deleteMeetingAction } from "@/lib/actions";

interface DeleteButtonProps {
  id: number;
}

export function DeleteButton({ id }: DeleteButtonProps) {
  const deleteActionWithId = deleteMeetingAction.bind(null, id);

  return (
    <form action={deleteActionWithId} onSubmit={(e) => {
      if (!confirm("Are you sure you want to permanently delete this sacrament meeting planner?")) {
        e.preventDefault();
      }
    }}>
      <button 
        type="submit" 
        className="inline-flex h-9 items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 px-3 text-xs font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 cursor-pointer transition-colors"
        aria-label="Delete this meeting planner"
      >
        Delete
      </button>
    </form>
  );
}
