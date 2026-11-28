import { ImageResponse } from "next/og";

export const alt = "Kashif Ali, front-end developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b0f24 0%, #1c2570 100%)",
          color: "#eef1f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 32 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "#3340ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#ffffff",
              marginRight: 18,
            }}
          >
            KA
          </div>
          Kashif Ali
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.12,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            Front-end developer building fast, responsive websites with React
            and Next.js.
          </div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 30, color: "#aeb5cf" }}>
            React, Next.js, TypeScript, Tailwind CSS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}