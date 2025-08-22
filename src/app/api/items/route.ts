import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: "1", code: "FG-100", description: "Widget A", uom: "EA" },
    { id: "2", code: "RM-200", description: "Steel Sheet", uom: "KG" },
    { id: "3", code: "SFG-150", description: "Subassembly B", uom: "EA" },
  ];
  return NextResponse.json({ data });
}