import React from 'react'

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-5">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="text-sm text-slate-600">{children}</div>
  </div>
)

export const Dashboard = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card title="Account Overview">Quick snapshot of your profile, subscription, and latest activity.</Card>
    <Card title="Watchlist">Add tickers to monitor price, volume and alerts.</Card>
    <Card title="News & Articles">Recent posts from the community and team.</Card>
    <Card title="Calendar">Upcoming events and earnings to watch.</Card>
    <Card title="Chat Highlights">Trending conversations from the chat rooms.</Card>
    <Card title="Indicators">Popular indicators shared by the community.</Card>
  </div>
)

export const Markets = () => (
  <Card title="Markets">Live market overview, heatmaps, top gainers/losers (stub UI).</Card>
)
export const Chat = () => (
  <Card title="Chat Room">Realtime chat coming soon. For now, say hi to everyone!</Card>
)
export const Indicators = () => (
  <Card title="Indicators">Add and manage indicators, presets and backtests.</Card>
)
export const Charts = () => (
  <Card title="Charts">Interactive charts and layouts will live here.</Card>
)
export const Articles = () => (
  <Card title="Articles">Browse tutorials, strategies and market commentary.</Card>
)
export const Library = () => (
  <Card title="Library">Saved ebooks, videos and resources.</Card>
)
export const CalendarPage = () => (
  <Card title="Calendar">Economic calendar and custom events.</Card>
)
export const Earnings = () => (
  <Card title="Earnings">Upcoming earnings and historical results.</Card>
)
export const Support = () => (
  <Card title="Support Center">Open tickets, FAQs and contact options.</Card>
)
export const Admin = () => (
  <Card title="Admin">Manage members, content and settings.</Card>
)
