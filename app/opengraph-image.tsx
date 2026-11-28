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
            width: 120,
            height: 120,
            borderRadius: 30,
            background: "#3340ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            color: "#ffffff",
          }}
        >
          KA
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 112 }}>
          Kashif Ali
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 60, color: "#dfe3f5" }}>
          Front-end developer
        </div>
      </div>
    ),
    { ...size },
  );
}