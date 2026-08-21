type PageHeroBandProps = {
  title: string;
  subtitle: string;
};

export function PageHeroBand({ title, subtitle }: PageHeroBandProps) {
  return (
    <section className="bg-gradient-to-br from-brand-yellow via-primary to-foreground px-4 pt-32 pb-16 text-center sm:px-6 sm:pt-36 sm:pb-20">
      <h1 className="mx-auto mb-3.5 max-w-2xl font-heading text-4xl leading-[1.05] font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto max-w-lg text-lg text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-xl">
        {subtitle}
      </p>
    </section>
  );
}
