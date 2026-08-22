import Image from "next/image";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-primary to-brand-yellow",
  "from-secondary to-foreground",
  "from-brand-yellow to-primary",
  "from-foreground to-secondary",
];

type GameThumbProps = {
  name: string;
  image?: string;
  index?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function GameThumb({
  name,
  image,
  index = 0,
  className,
  sizes = "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw",
  priority,
}: GameThumbProps) {
  if (image) {
    // Fondo crema + object-contain: las fotos de producto vienen con fondo blanco y
    // relaciones de aspecto muy distintas entre sí — esto evita que se recorten mal
    // y que el blanco de la foto se pierda contra el blanco de la card.
    return (
      <div className={cn("relative aspect-[4/3] bg-muted p-6", className)}>
        <Image
          src={image}
          alt={name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain drop-shadow-[0_10px_18px_rgba(27,42,65,0.15)]"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex aspect-[4/3] items-center justify-center bg-gradient-to-br p-6 text-center",
        GRADIENTS[index % GRADIENTS.length],
        className
      )}
    >
      <span className="font-heading text-lg font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] sm:text-xl">
        {name}
      </span>
    </div>
  );
}
