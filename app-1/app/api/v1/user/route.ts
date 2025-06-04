import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { value } = body;

  if (!value) {
    return NextResponse.json(
      { success: false, message: "Value is required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: `Received value: ${value}`,
  });
}
