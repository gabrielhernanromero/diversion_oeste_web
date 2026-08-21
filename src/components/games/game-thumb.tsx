import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-primary to-brand-yellow",
  "from-secondary to-foreground",
  "from-brand-yellow to-primary",
  "from-foreground to-secondary",
];

type GameThumbProps = {
  name: string;
  index?: number;
  aspect?: "square" | "video";
  className?: string;
};

export function GameThumb({ name, index = 0, aspect = "square", className }: GameThumbProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br p-6 text-center",
        GRADIENTS[index % GRADIENTS.length],
        aspect === "video" ? "aspect-video" : "aspect-[4/3]",
        className
      )}
    >
      <span className="font-heading text-lg font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] sm:text-xl">
        {name}
      </span>
    </div>
  );
}
