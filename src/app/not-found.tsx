import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-slate-950">
          Pagina nao encontrada
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          O lancamento solicitado nao esta cadastrado ou o endereco foi alterado.
        </p>
        <Link
          href="/lancamentos"
          className="mt-8 inline-flex rounded-sm bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Ver lancamentos
        </Link>
      </div>
    </section>
  );
}
