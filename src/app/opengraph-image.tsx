import { ImageResponse } from "next/og";

export const alt = "Diversión Oeste — Alquiler de juegos para fiestas y eventos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`No se pudo resolver la fuente ${family}`);
  const fontResponse = await fetch(match[1]);
  return fontResponse.arrayBuffer();
}

export default async function OpengraphImage() {
  const title = "Diversión Oeste";
  const tagline = "Alquiler de juegos para fiestas y eventos";
  const badge = "Zona Oeste · GBA";

  const [headingFont, bodyFont] = await Promise.all([
    loadGoogleFont("Baloo+2", 800, `${title}${badge}`),
    loadGoogleFont("Work+Sans", 500, tagline),
  ]);

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
          backgroundImage: "linear-gradient(160deg, #FFC93C 0%, #F2662D 55%, #1B2A41 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Baloo 2",
            fontSize: 28,
            fontWeight: 800,
            color: "#1B2A41",
            background: "#FFC93C",
            padding: "14px 32px",
            borderRadius: 999,
            marginBottom: 36,
          }}
        >
          {badge}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Baloo 2",
            fontSize: 96,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.05,
            textShadow: "0 4px 24px rgba(0,0,0,0.35)",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: 34,
            color: "#FFFFFF",
            marginTop: 28,
            textAlign: "center",
            textShadow: "0 2px 14px rgba(0,0,0,0.45)",
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Baloo 2", data: headingFont, style: "normal", weight: 800 },
        { name: "Work Sans", data: bodyFont, style: "normal", weight: 500 },
      ],
    },
  );
}
