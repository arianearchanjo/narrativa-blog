export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="text-2xl font-bold text-blue-600">Narrativa</div>
        </div>
        {children}
      </div>
    </div>
  );
}
