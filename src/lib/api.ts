// Cliente do backend (Node.js + Express, a ser implementado).
// Enquanto NEXT_PUBLIC_API_URL não estiver definido, o site cai no WhatsApp.
// Contrato esperado: veja docs/API.md.

export const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export const hasBackend = API_URL.length > 0;

export type Especie = "cao" | "gato" | "outro";
export type Porte = "P" | "M" | "G";

export type AgendamentoInput = {
  nome: string;
  telefone: string;
  pet: string;
  especie: Especie;
  porte: Porte;
  servico: string;
  observacao?: string;
};

export type AgendamentoResponse = {
  id: string;
  status: "recebido";
};

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(body?.message ?? "Não foi possível enviar agora.", res.status);
  }
  return res.json() as Promise<T>;
}

export function criarAgendamento(data: AgendamentoInput) {
  return request<AgendamentoResponse>("/api/agendamentos", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
