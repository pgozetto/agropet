"use client";

import { useState } from "react";
import { CheckCircle, Warning, WhatsappLogo } from "@phosphor-icons/react";
import { criarAgendamento, hasBackend, type AgendamentoInput } from "@/lib/api";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const servicos = ["Banho", "Banho e tosa", "Tosa higiênica", "Vacinação"];

const especieLabel = { cao: "cão", gato: "gato", outro: "pet" } as const;

function mensagemWhatsApp(d: AgendamentoInput) {
  const linhas = [
    `Olá! Quero agendar ${d.servico.toLowerCase()} para meu ${especieLabel[d.especie]} ${d.pet}, porte ${d.porte}.`,
    `Meu nome é ${d.nome}.`,
    d.observacao ? `Obs.: ${d.observacao}` : "",
  ];
  return linhas.filter(Boolean).join("\n");
}

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/80 focus:border-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-brand";
const label = "text-sm font-semibold text-ink";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: AgendamentoInput = {
      nome: String(fd.get("nome") ?? "").trim(),
      telefone: String(fd.get("telefone") ?? "").trim(),
      pet: String(fd.get("pet") ?? "").trim(),
      especie: fd.get("especie") as AgendamentoInput["especie"],
      porte: fd.get("porte") as AgendamentoInput["porte"],
      servico: String(fd.get("servico") ?? ""),
      observacao: String(fd.get("observacao") ?? "").trim() || undefined,
    };

    // Sem backend configurado: segue direto para o WhatsApp com a mensagem pronta.
    if (!hasBackend) {
      window.open(whatsappLink(mensagemWhatsApp(data)), "_blank", "noopener,noreferrer");
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      await criarAgendamento(data);
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar agora.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl bg-surface p-8 shadow-soft">
        <CheckCircle size={40} weight="duotone" className="text-brand" aria-hidden />
        <h3 className="text-2xl font-semibold tracking-tight">Pedido enviado</h3>
        <p className="text-muted">
          {hasBackend
            ? "Recebemos seu pedido. Vamos confirmar o horário pelo WhatsApp."
            : "Finalize a conversa no WhatsApp para confirmarmos o horário."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-semibold text-brand-ink underline underline-offset-4"
        >
          Fazer outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl bg-surface p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="nome" className={label}>Seu nome</label>
          <input id="nome" name="nome" required autoComplete="name" className={field} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="telefone" className={label}>WhatsApp</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="(19) 90000-0000"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-2">
          <label htmlFor="pet" className={label}>Nome do pet</label>
          <input id="pet" name="pet" required className={field} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="especie" className={label}>Espécie</label>
          <select id="especie" name="especie" defaultValue="cao" className={field}>
            <option value="cao">Cão</option>
            <option value="gato">Gato</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className={`${label} mb-2`}>Porte</legend>
        <div className="grid grid-cols-3 gap-2">
          {(["P", "M", "G"] as const).map((p) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="porte" value={p} defaultChecked={p === "M"} className="peer sr-only" />
              <span className="block rounded-xl border border-line bg-bg py-3 text-center font-semibold text-muted transition-colors peer-checked:border-brand peer-checked:bg-brand-deep peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-brand">
                {p === "P" ? "Pequeno" : p === "M" ? "Médio" : "Grande"}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-2">
        <label htmlFor="servico" className={label}>Serviço</label>
        <select id="servico" name="servico" defaultValue="Banho e tosa" className={field}>
          {servicos.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="observacao" className={label}>Observações</label>
        <textarea
          id="observacao"
          name="observacao"
          rows={3}
          aria-describedby="observacao-ajuda"
          className={`${field} resize-none`}
        />
        <p id="observacao-ajuda" className="text-sm text-muted">
          Opcional. Ex.: raça, dia preferido ou se o pet fica ansioso.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-xl bg-accent/15 px-4 py-3 text-sm font-medium text-ink">
          <Warning size={18} weight="bold" aria-hidden className="shrink-0" />
          {error} Tente de novo ou fale direto no WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 font-semibold text-cta-fg transition-transform active:scale-[0.98] disabled:opacity-70"
      >
        <WhatsappLogo size={20} weight="bold" aria-hidden />
        {status === "sending" ? "Enviando..." : "Enviar pedido"}
      </button>
    </form>
  );
}
