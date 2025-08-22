"use client";

import React from "react";
import StatusBadge from "./StatusBadge";

type Line = {
  id: string;
  name: string;
  status: "Running" | "Hold" | "Down";
};

type LineStatusPanelProps = {
  lines: Line[];
};

export default function LineStatusPanel({ lines }: LineStatusPanelProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Line status</h2>
        <div className="text-xs text-gray-500">Quick actions</div>
      </div>
      <div className="mt-3 divide-y divide-gray-100">
        {lines.map((l) => (
          <div key={l.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div className="font-medium">{l.name}</div>
              <StatusBadge status={l.status} />
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded bg-gray-900 text-white px-2 py-1 text-xs hover:bg-gray-800">Start</button>
              <button className="rounded border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50">Pause</button>
              <button className="rounded border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50">Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}