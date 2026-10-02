export type Faq = {
  question: string;
  answer: string;
  /** Slugs de juegos en cuya ficha se muestra esta pregunta. "all" = en todas. */
  showOn?: string[] | "all";
};

export const faqs: Faq[] = [
  {
    question: "¿Con cuánto tiempo de anticipación tengo que reservar?",
    answer:
      "Podés reservar cuando quieras, pero te recomendamos confirmar cuanto antes para asegurarte el juego que buscás en la fecha que necesitás — la disponibilidad se va cerrando a medida que se acercan los fines de semana con más eventos.",
  },
  {
    question: "¿Cómo reservo?",
    answer:
      "Escribinos por WhatsApp contándonos qué juegos te interesan, la fecha, el horario y la dirección del evento. Con esos datos te confirmamos disponibilidad y coordinamos la reserva.",
    showOn: "all",
  },
  {
    question: "¿Cuándo se abona?",
    answer:
      "Para confirmar la reserva pedimos una seña del 50%. El saldo restante se abona el día del evento, al momento de la entrega.",
  },
  {
    question: "¿Por cuánto tiempo es el alquiler?",
    answer:
      "El alquiler estándar es por 6 horas, con entregas a partir de las 8:00 AM. Si tu evento se extiende, podés pedir horas adicionales — se cobra un porcentaje extra sobre el valor del alquiler por el tiempo de más, coordinándolo con anticipación para asegurar la disponibilidad del juego.",
    showOn: "all",
  },
  {
    question: "¿Qué pasa si el día del evento llueve?",
    answer:
      "Ofrecemos reprogramar la fecha según disponibilidad, o cambiar el Castillo Inflable por alguno de los juegos de interior del catálogo (Metegol, Pool, Beer Pong, Tejo, Yenga) que no dependen del clima. La seña queda a favor de la nueva fecha, no se devuelve en caso de cancelación total.",
    showOn: ["castillo-inflable"],
  },
  {
    question: "¿Qué necesito para instalar el Castillo Inflable?",
    answer:
      "El castillo mide 3 x 3 metros, así que necesitás un espacio libre de al menos 6 x 6 metros — sumando 1,5 metros adicionales de cada lado en ancho y largo — y un toma corriente cercano al área de armado (proveemos alargue). Si el espacio es cerrado, también hay que medir la altura disponible.",
    showOn: ["castillo-inflable"],
  },
  {
    question: "¿Qué hacer si hay tormenta durante el evento?",
    answer:
      "Por seguridad, hay que resguardar el motor en un lugar cubierto y proteger el inflable con la lona inferior, o guardarlo bajo techo si es posible, hasta que pase el mal tiempo.",
    showOn: ["castillo-inflable"],
  },
  {
    question: "¿Qué no se puede meter dentro del Castillo Inflable?",
    answer:
      "Para cuidar el juego y la seguridad de los chicos: nada de papel picado, comida, bebidas, objetos cortantes ni serpentinas dentro del inflable.",
    showOn: ["castillo-inflable"],
  },
  {
    question: "¿Hasta dónde llegan?",
    answer:
      "Somos de zona oeste y ahí tenemos la mayoría de nuestros eventos, pero llegamos a toda Capital Federal y el Gran Buenos Aires. El costo del traslado se cotiza según la distancia real a tu evento.",
    showOn: "all",
  },
];

export function getFaqsForGame(slug: string): Faq[] {
  return faqs.filter((faq) => faq.showOn === "all" || faq.showOn?.includes(slug));
}
