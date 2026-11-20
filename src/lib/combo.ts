// El descuento depende solo de la cantidad de juegos elegidos, no de cuáles sean.
const DESCUENTO_POR_CANTIDAD: Record<number, number> = {
  1: 0,
  2: 12,
  3: 15,
  4: 20,
  5: 25,
  6: 30,
};

export function getDescuentoPorCantidad(cantidad: number): number {
  return DESCUENTO_POR_CANTIDAD[cantidad] ?? 0;
}

export function calcularPrecioFinal(precioLista: number, descuento: number): number {
  // Redondeado al múltiplo de $5.000 más cercano para que el precio se vea prolijo.
  return Math.round((precioLista * (1 - descuento / 100)) / 5000) * 5000;
}

// Formatea con punto de miles (80000 → "80.000"). Sin Intl para que servidor y navegador den lo mismo.
export function formatPrecio(precio: number): string {
  return Math.round(precio)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
