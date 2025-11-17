import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-800">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <footer className="border-t mt-12 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} TradeHub Community</footer>
    </div>
  )
}
