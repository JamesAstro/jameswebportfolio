import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  // Define the file path (e.g., in the public folder or another directory)
  const filePath = path.join(
    process.cwd(),
    "public/files/james-clifford-astronomo-resume.pdf"
  );
  const fileBuffer = fs.readFileSync(filePath);

  // Set headers for file download
  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    'attachment; filename="james-clifford-astronomo-resume.pdf"'
  );

  return new NextResponse(fileBuffer, {
    status: 200,
    headers,
  });
}
