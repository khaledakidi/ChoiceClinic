import { useEffect, useState } from "react";
import logoLight from "@/assets/logo-clean.png";
import logoDark from "@/assets/logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * BrandLogo
 *
 * The source PNG logos have a non-transparent background (gray or
 * white) baked in. Rather than relying on a tight chroma-key, we
 * key on *saturation*: the logo mark is warm gold (high saturation),
 * every background pixel is a shade of gray (zero saturation). We
 * can therefore alpha-out anything whose saturation is below a
 * threshold, leaving only the gold letters/star visible.
 */
interface Props {
  className?: string;
  alt?: string;
}

// sat returns HSL-saturation [0..1] for an (R,G,B) triple in [0..255].
const sat = (r: number, g: number, b: number) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2 / 255;
  if (max === min) return 0;
  const d = (max - min) / 255;
  return l > 0.5 ? d / (2 - max / 255 - min / 255) : d / (max / 255 + min / 255);
};

const BrandLogo = ({
  className = "h-20 w-auto object-contain",
  alt = "Choice Clinic",
}: Props) => {
  const { theme } = useTheme();
  const sourceSrc = theme === "dark" ? logoDark : logoLight;
  const [src, setSrc] = useState<string>(sourceSrc);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = sourceSrc;
    img.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const p = data.data;

      for (let i = 0; i < p.length; i += 4) {
        const r = p[i];
        const g = p[i + 1];
        const b = p[i + 2];
        const s = sat(r, g, b);
        const maxC = Math.max(r, g, b);

        // Gold has high saturation AND high brightness.
        // Gray bg has saturation ~ 0 and mid brightness.
        // Kill anything that isn't clearly gold.
        const SAT_LOW = 0.22;
        const SAT_HIGH = 0.42;
        const BRIGHT_MIN = 120; // gold mark is bright (>150); gray bg is ~120

        if (s <= SAT_LOW || maxC < BRIGHT_MIN) {
          p[i + 3] = 0;
        } else if (s < SAT_HIGH) {
          const t = (s - SAT_LOW) / (SAT_HIGH - SAT_LOW);
          p[i + 3] = Math.round(p[i + 3] * t);
        }
        // else: keep as-is (saturated gold)
      }

      ctx.putImageData(data, 0, 0);
      if (!cancelled) setSrc(canvas.toDataURL("image/png"));
    };
    return () => {
      cancelled = true;
    };
  }, [sourceSrc]);

  return <img src={src} alt={alt} className={className} />;
};

export default BrandLogo;
