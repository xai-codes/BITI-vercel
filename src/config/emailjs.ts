/**
 * EmailJS — values must live in `.env` (Vite only exposes variables prefixed with `VITE_`).
 * Copy `.env.example` to `.env` in the project root and paste your keys from
 * https://dashboard.emailjs.com/ — do not commit `.env`.
 *
 * "Service ID not found" usually means the Public Key and Service ID are not from the same
 * EmailJS account, or the Service ID was mistyped. Re-copy all three from the dashboard and
 * restart `npm run dev` after changing `.env`.
 */
function cleanEnvValue(value: string | undefined): string {
  if (!value) return "";
  let s = value.replace(/^\uFEFF/, "").trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }
  return s.replace(/\u200B/g, "").trim();
}

export function getEmailJsConfig() {
  const serviceId = cleanEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const templateId = cleanEnvValue(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  const publicKey = cleanEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const ok = Boolean(serviceId && templateId && publicKey);
  return { serviceId, templateId, publicKey, ok };
}
