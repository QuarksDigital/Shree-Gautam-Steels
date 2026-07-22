"use client";

import { useState, type FormEvent } from "react";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { CONTACT } from "@/lib/contact";
import { submitEnquiry } from "@/lib/enquiry";
import Reveal from "@/components/ui/Reveal";

export default function Enquiry() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    interest: "",
    quantity: "",
    message: "",
    hp_token: "", // honeypot — must stay empty
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const result = await submitEnquiry(form);
    setSending(false);
    if (result.ok) {
      setSent(true);
    } else {
      setError(result.message);
    }
  };

  const field =
    "w-full rounded-lg border border-[var(--line-strong)] bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-ink disabled:opacity-60";

  return (
    <section id="enquiry" className="bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-350 gap-14 px-6 md:grid-cols-2 md:px-10">
        {/* Left: pitch + direct contact */}
        <div>
          <Reveal as="p" className="eyebrow mb-4">
            Request a Quote
          </Reveal>
          <Reveal as="h2" className="font-display display-lg font-light">
            Let&rsquo;s talk <span className="italic">volume</span>.
          </Reveal>
          <Reveal as="p" className="mt-6 max-w-md text-steel-600">
            Tell us what you need and we&rsquo;ll come back with pricing, MOQ and
            lead times. Prefer to talk now? Reach us directly.
          </Reveal>

          <div className="mt-10 space-y-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded-xl border border-(--line-strong) px-5 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="text-sm font-semibold">WhatsApp</span>
              <span className="text-sm text-steel-500">Chat now →</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneDial}`}
              className="flex items-center justify-between rounded-xl border border-(--line-strong) px-5 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="text-sm font-semibold">Call</span>
              <span className="text-sm text-steel-500">{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center justify-between rounded-xl border border-(--line-strong) px-5 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="text-sm font-semibold">Email</span>
              <span className="text-sm text-steel-500">{CONTACT.email}</span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-(--line) bg-white p-6 md:p-10">
          {sent ? (
            <div className="flex h-full min-h-75 flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-ink text-paper">
                ✓
              </div>
              <h3 className="mt-6 font-display text-2xl font-light">Thank you.</h3>
              <p className="mt-2 max-w-xs text-sm text-steel-500">
                Your enquiry has been received. We typically respond within one
                business day.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    company: "",
                    name: "",
                    email: "",
                    phone: "",
                    interest: "",
                    quantity: "",
                    message: "",
                    hp_token: "",
                  });
                }}
                className="mt-6 text-sm font-semibold underline underline-offset-4"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4" autoComplete="off" noValidate>
              {/* Honeypot: hidden from real users; renamed so browsers won't autofill it */}
              <input
                type="text"
                name="hp_token"
                value={form.hp_token}
                onChange={update("hp_token")}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                data-lpignore="true"
                data-1p-ignore="true"
                data-form-type="other"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Company name" value={form.company} onChange={update("company")} className={field} disabled={sending} />
                <input required placeholder="Your name" value={form.name} onChange={update("name")} className={field} disabled={sending} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} className={field} disabled={sending} />
                <input required placeholder="Phone" value={form.phone} onChange={update("phone")} className={field} disabled={sending} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select required value={form.interest} onChange={update("interest")} className={field} disabled={sending}>
                  <option value="" disabled>
                    Product interest
                  </option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Multiple / Custom">Multiple / Custom</option>
                </select>
                <input placeholder="Est. quantity (units)" value={form.quantity} onChange={update("quantity")} className={field} disabled={sending} />
              </div>
              <textarea
                rows={4}
                placeholder="Tell us about your requirement"
                value={form.message}
                onChange={update("message")}
                className={`${field} resize-none`}
                disabled={sending}
              />

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Enquiry"}
              </button>
              <p className="text-center text-xs text-steel-400">
                We respect your privacy. Details are used only to respond to your
                enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
