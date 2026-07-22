const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

export interface EnquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  quantity: string;
  message: string;
  /** Honeypot — must stay empty for real users. */
  hp_token?: string;
}

export interface EnquiryResult {
  ok: boolean;
  message: string;
}

/** Submit an enquiry to the backend, which validates, sanitizes and stores it. */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  try {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { message?: string };
    if (!res.ok) {
      return { ok: false, message: data.message ?? `Request failed (${res.status}).` };
    }
    return { ok: true, message: data.message ?? "Enquiry received." };
  } catch {
    return {
      ok: false,
      message: "Couldn't reach the server. Please try again, or contact us on WhatsApp/phone.",
    };
  }
}
