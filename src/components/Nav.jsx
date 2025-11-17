import { Menu, User, Home, LineChart, BookOpen, MessageSquare, Settings, Calendar, Library, Newspaper, BarChart3, Headphones, Shield } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const sections = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/markets', label: 'Markets', icon: LineChart },
  { to: '/chat', label: 'Chat Room', icon: MessageSquare },
  { to: '/indicators', label: 'Indicators', icon: BarChart3 },
  { to: '/charts', label: 'Charts', icon: LineChart },
  { to: '/articles', label: 'Articles', icon: Newspaper },
  { to: '/library', label: 'Library', icon: BookOpen },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/earnings', label: 'Earnings', icon: BarChart3 },
  { to: '/support', label: 'Support Center', icon: Headphones },
  { to: '/admin', label: 'Admin', icon: Shield },
]

export default function Nav() {
  return (
    <div className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 flex items-center gap-6">
          <Link to="/" className="font-semibold text-indigo-600">TradeHub</Link>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            {sections.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({isActive}) => `flex items-center gap-1 hover:text-gray-900 ${isActive ? 'text-gray-900' : ''}`}>
                <Icon size={16} /> {label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">Login</Link>
            <Link to="/register" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-3 py-1.5 text-sm hover:bg-indigo-700">Join</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
