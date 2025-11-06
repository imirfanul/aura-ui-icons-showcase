import "./globals.css"
import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
	title: "Aura UI Icons — Showcase",
	description:
		"Browse, search, and copy code for icons from the unified package."
}

function ThemeShell({ children }: { children: React.ReactNode }) {
	const [dark, setDark] = React.useState(true)
	React.useEffect(() => {
		document.documentElement.classList.toggle("dark", dark)
	}, [dark])

	return (
		<div className="min-h-dvh">
			<header className="container-std flex items-center justify-between py-5">
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-lg bg-brand/20 border border-brand/30" />
					<h1 className="text-lg font-semibold">
						Aura UI Icons — Showcase
					</h1>
				</div>
				<button className="btn" onClick={() => setDark((v) => !v)}>
					{dark ? "🌙 Dark" : "☀️ Light"}
				</button>
			</header>
			{children}
			<footer className="container-std py-8 text-sm text-text-muted">
				Install: <code>pnpm add @aura-ui/icons</code>
			</footer>
		</div>
	)
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeShell>{children}</ThemeShell>
			</body>
		</html>
	)
}
