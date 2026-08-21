import { Resend } from "resend";

// El SDK de Resend tira una excepción sincrónica al construirse si falta la key (rompería
// cualquier página que importe este módulo antes de que el cliente cargue RESEND_API_KEY en
// .env.local). Con un placeholder, el fallo se pospone a la llamada real y cae en el catch
// de cada acción en vez de tirar un 500 sin manejar.
export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_configurar_en_env_local");
