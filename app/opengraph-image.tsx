import { ImageResponse } from "next/og";

export const alt = "Kashif Ali, front-end developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Everything important sits in the centre square, so apps that crop the
// image to a square (like WhatsApp) still show the name and the role.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0f24 0%, #1c2570 100%)",
          color: "#eef1f6",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#3340ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            color: "#ffffff",
          }}
        >
          KA
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 92 }}>
          Kashif Ali
        </div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 52, color: "#c9cfe6" }}>
          Front-end developer
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 30, color: "#aeb5cf" }}>
          React, Next.js, TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}