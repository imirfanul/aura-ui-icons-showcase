"use client"

import * as React from "react"
import { SETS, SetKey, IconComp } from "@/lib/iconSets"
import Toolbar from "@/components/Toolbar"
import IconCard from "@/components/IconCard"

export default function Page() {
	const [active, setActive] = React.useState<SetKey>("lucide")
	const [query, setQuery] = React.useState("")
	const [size, setSize] = React.useState(28)
	const [stroke, setStroke] = React.useState(1.75)
	const [deep, setDeep] = React.useState(false)

	const current = React.useMemo(
		() => SETS.find((s) => s.key === active)!,
		[active]
	)
	const mod = current.mod as Record<string, IconComp>

	const names = React.useMemo(
		() =>
			Object.keys(mod).filter(
				(k) => typeof (mod as any)[k] === "function"
			),
		[mod]
	)

	const filtered = React.useMemo(() => {
		const q = query.trim().toLowerCase()
		if (!q) return names
		return names.filter((n) => n.toLowerCase().includes(q))
	}, [names, query])

	return (
		<main className="container-std space-y-5">
			<section className="card">
				<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<div>
						<h2 className="text-base font-semibold">Install</h2>
						<code className="text-sm">pnpm add @aura-ui/icons</code>
						<p className="text-xs text-text-muted">
							Install specific sets for previews (e.g.,{" "}
							<code>pnpm add lucide-react</code>).
						</p>
					</div>
					<div className="text-xs text-text-muted">
						Set: <code>{current.pkg}</code>
					</div>
				</div>
			</section>

			<Toolbar
				active={active}
				onSetChange={setActive}
				query={query}
				onQuery={setQuery}
				size={size}
				onSize={setSize}
				stroke={stroke}
				onStroke={setStroke}
				strokeEnabled={current.stroke}
				deep={deep}
				onDeep={setDeep}
				count={filtered.length}
			/>

			<section
				className="grid gap-3"
				style={{
					gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))"
				}}
			>
				{filtered.map((name) => (
					<IconCard
						key={name}
						name={name}
						Comp={mod[name]}
						size={size}
						stroke={current.stroke ? stroke : undefined}
						pkg={current.pkg}
						deep={deep}
					/>
				))}
			</section>
		</main>
	)
}
