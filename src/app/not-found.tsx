import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-4 py-24 text-center">
      <Image src="/logo-icon.svg" alt="" width={72} height={72} className="size-18" />
      <p className="font-heading text-6xl font-extrabold text-primary sm:text-7xl">404</p>
      <h1 className="font-heading text-2xl font-extrabold sm:text-3xl">Esta página se nos escapó</h1>
      <p className="max-w-md text-muted-foreground">
        El link que seguiste no existe o se movió. Volvé al inicio o mirá el catálogo de juegos para tu próximo
        evento.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Button asChild className="h-auto rounded-2xl px-6 py-3 text-base font-bold">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline" className="h-auto rounded-2xl px-6 py-3 text-base font-bold">
          <Link href="/juegos">Ver catálogo</Link>
        </Button>
      </div>
    </div>
  );
}
