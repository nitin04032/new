import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: "10", itemCode: "FG-100", rev: "A", components: 3 },
    { id: "11", itemCode: "SFG-150", rev: "B", components: 2 },
  ];
  return NextResponse.json({ data });
}