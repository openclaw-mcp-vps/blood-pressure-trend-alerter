import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blood Pressure Trend Alerter – Smart Alerts for Dangerous BP Trends",
  description: "Analyzes blood pressure readings over time, detects dangerous trends before they become critical, and sends alerts to users and doctors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="696f2d2b-a4c7-434f-b584-05754024d604"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
