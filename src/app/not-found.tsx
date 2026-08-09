import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO por cliente: adaptar copy y estilo a la identidad de marca.
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">Error 404</p>
      <h1 className="text-3xl font-semibold">Esta página no existe</h1>
      <p className="max-w-md text-muted-foreground">
        Puede que el link esté roto o que la página se haya movido. Volvé al inicio para seguir navegando.
      </p>
      <Button asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
