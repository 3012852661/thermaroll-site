import { NextResponse } from "next/server";

type InquiryPayload = {
  email?: string;
  message?: string;
  name?: string;
  product?: string;
  quantity?: string;
};

const requiredEnv = ["BREVO_API_KEY", "INQUIRY_TO_EMAIL", "INQUIRY_FROM_EMAIL"] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(payload: Required<InquiryPayload>) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Business interest", payload.product],
    ["Project scale", payload.quantity],
    ["Requirement", payload.message],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1c1917; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New Noviwon website inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #e7e5e4; padding: 10px; font-weight: 700; width: 180px; background: #fafaf9;">${label}</td>
                <td style="border: 1px solid #e7e5e4; padding: 10px;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  const missingEnv = getMissingEnv();

  if (missingEnv.length > 0) {
    return NextResponse.json(
      {
        error: `Email service is not configured. Missing: ${missingEnv.join(", ")}`,
      },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => null)) as InquiryPayload | null;
  const payload = {
    email: clean(body?.email),
    message: clean(body?.message),
    name: clean(body?.name),
    product: clean(body?.product),
    quantity: clean(body?.quantity),
  };

  if (!payload.name || !payload.email || !payload.product || !payload.quantity || !payload.message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    body: JSON.stringify({
      htmlContent: buildEmailHtml(payload),
      replyTo: {
        email: payload.email,
        name: payload.name,
      },
      sender: {
        email: process.env.INQUIRY_FROM_EMAIL,
        name: "Noviwon Inquiry",
      },
      subject: `New Noviwon inquiry from ${payload.name} - ${payload.product}`,
      to: [
        {
          email: process.env.INQUIRY_TO_EMAIL,
          name: "Sales Team",
        },
      ],
    }),
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as {
      code?: string;
      message?: string;
    } | null;

    return NextResponse.json(
      {
        error: result?.message ?? "Email service failed. Please try again later.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
