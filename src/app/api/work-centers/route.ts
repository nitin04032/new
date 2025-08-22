import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: "100", code: "WC-PAINT", type: "Machine", capacity: 1 },
    { id: "101", code: "WC-ASSY", type: "Cell", capacity: 4 },
  ];
  return NextResponse.json({ data });
}