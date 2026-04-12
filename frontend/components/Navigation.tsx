'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/portfolio', label: 'Portfolio', icon: '💼' },
  { href: '/risk', label: 'Risk', icon: '⚠️' },
  { href: '/execution', label: 'Execution', icon: '⚡' },
  { href: '/research', label: 'Research', icon: '🔬' },
  { href: '/signals', label: 'Signals', icon: '📡' },
  { href: '/agents', label: 'AI Agents', icon: '🤖' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-blue-400">V2K2SP</div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Connected
            </div>
            <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors">
              ⚙️ Settings
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
