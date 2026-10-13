import { BookingForm } from "./booking-form";
import { Reveal } from "./reveal";

const steps = [
  { title: "Escolha o serviço", text: "Banho, tosa ou vacinação." },
  { title: "Conte sobre o pet", text: "Nome, espécie e porte." },
  { title: "Confirme o horário", text: "Respondemos pelo WhatsApp." },
];

export function Booking() {
  return (
    <section id="agendar" className="bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Agende o banho em menos de um minuto.
          </h2>
        </Reveal>

        <ol className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06} className="flex flex-col items-center text-center">
                <span
                  aria-hidden
                  className="grid size-12 place-items-center rounded-full bg-ipe text-lg font-semibold text-ipe-ink"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
