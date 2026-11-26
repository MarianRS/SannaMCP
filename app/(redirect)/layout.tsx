import "../globals.css";
import { fontVariables } from "@/lib/fonts";

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
