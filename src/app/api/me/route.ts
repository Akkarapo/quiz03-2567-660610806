import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Oakkharaphong garpanya",
    studentId: "660610806",
  });
};
