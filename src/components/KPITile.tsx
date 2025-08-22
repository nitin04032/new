import React from "react";

type KPITileProps = {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
};

export default function KPITile({ label, value, delta, positive }: KPITileProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        {delta && (
          <div className={"text-xs px-1.5 py-0.5 rounded " + (positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
            {delta}
          </div>
        )}
      </div>
      <div className="mt-3 h-8 w-full rounded bg-gray-50" />
    </div>
  );
}