export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Bem-vindo ao Narrativa
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Um espaço dedicado ao pensamento crítico sobre política e sociedade brasileira.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Artigos Recentes</h2>
          <p className="text-slate-600">Confira nossas últimas análises sobre o cenário nacional.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Opinião</h2>
          <p className="text-slate-600">Espaço para colunistas e debates de ideias.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Análise Política</h2>
          <p className="text-slate-600">Desvendando os bastidores do poder em Brasília.</p>
        </div>
      </section>
    </div>
  );
}
