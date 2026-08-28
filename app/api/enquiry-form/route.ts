import { NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  "https://mekark-mail.onrender.com/api/enquiry-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    if (!body.name || !body.phone || !body.service || !body.sqf) {
      return NextResponse.json(
        {
          message:
            "Name, phone, project type and sqft are required",
        },
        { status: 400 },
      );
    }

    const payload = {
      ...body,
      sourceDomain:
        body.sourceDomain ||
        (origin ? new URL(origin).hostname : undefined) ||
        (referer ? new URL(referer).hostname : undefined),
      sourceUrl:
        body.sourceUrl ||
        body.pageUrl ||
        referer ||
        origin ||
        undefined,
    };

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(origin ? { Origin: origin } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("External API error:", errorText);

      return NextResponse.json(
        {
          message: "Failed to submit form to external service",
        },
        { status: response.status },
      );
    }

    const data = await response.json().catch(() => ({}));

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
