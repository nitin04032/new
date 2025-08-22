import React from "react";

type Status = "Running" | "Hold" | "Down" | "Planned" | "Released" | "Done" | "Closed";

type StatusBadgeProps = { status: Status };

const styles: Record<Status, string> = {
  Running: "bg-green-50 text-green-700 border-green-200",
  Hold: "bg-amber-50 text-amber-700 border-amber-200",
  Down: "bg-red-50 text-red-700 border-red-200",
  Planned: "bg-gray-50 text-gray-700 border-gray-200",
  Released: "bg-blue-50 text-blue-700 border-blue-200",
  Done: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Closed: "bg-slate-50 text-slate-700 border-slate-200",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}