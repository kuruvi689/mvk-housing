import { NextResponse } from "next/server";
import { appendBuyerEnquiry, appendSellerEnquiry } from "@/lib/enquirySheet";

function requireString(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing required field: ${key}`);
  }
  return value.trim();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    if (body.type === "buyer") {
      await appendBuyerEnquiry({
        name: requireString(body, "name"),
        phone: requireString(body, "phone"),
        location: typeof body.location === "string" ? body.location.trim() : "",
        budget: typeof body.budget === "string" ? body.budget.trim() : "",
        needType: typeof body.needType === "string" ? body.needType.trim() : "",
        expectations: typeof body.expectations === "string" ? body.expectations.trim() : "",
      });
    } else if (body.type === "seller") {
      await appendSellerEnquiry({
        name: requireString(body, "name"),
        address: requireString(body, "address"),
        phone: requireString(body, "phone"),
        location: typeof body.location === "string" ? body.location.trim() : "",
        configuration: typeof body.configuration === "string" ? body.configuration.trim() : "",
        area: typeof body.area === "string" ? body.area.trim() : "",
        furnishing: typeof body.furnishing === "string" ? body.furnishing.trim() : "",
      });
    } else {
      return NextResponse.json({ ok: false, error: "Invalid enquiry type" }, { status: 400 });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
