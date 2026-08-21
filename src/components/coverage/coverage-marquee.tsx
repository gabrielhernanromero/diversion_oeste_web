export const LOCALITIES = [
  "Morón",
  "Castelar",
  "El Palomar",
  "Haedo",
  "Hurlingham",
  "Villa Tesei",
  "Ituzaingó",
  "Merlo",
  "Libertad",
  "Pontevedra",
  "San Justo",
  "Ramos Mejía",
  "Isidro Casanova",
  "Villa Luzuriaga",
  "Caseros",
  "Castillo",
  "Ciudadela",
];

export function CoverageMarquee() {
  const loop = [...LOCALITIES, ...LOCALITIES];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div
        aria-hidden="true"
        className="flex w-max gap-2.5 motion-safe:animate-[marquee-scroll_32s_linear_infinite]"
      >
        {loop.map((locality, index) => (
          <span
            key={`${locality}-${index}`}
            className="shrink-0 rounded-xl border-[1.5px] border-secondary bg-secondary/10 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-foreground"
          >
            {locality}
          </span>
        ))}
      </div>
    </div>
  );
}
