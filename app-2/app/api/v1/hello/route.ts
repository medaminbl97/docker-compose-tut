import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from App2 API v1!" });
}
