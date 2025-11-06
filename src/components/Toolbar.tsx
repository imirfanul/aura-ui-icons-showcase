"use client"
import { SETS, SetKey } from "@/lib/iconSets"

type Props = {
	active: SetKey
	onSetChange: (k: SetKey) => void
	query: string
	onQuery: (v: string) => void
	size: number
	onSize: (n: number) => void
	stroke: number
	onStroke: (n: number) => void
	strokeEnabled: boolean
	deep: boolean
	onDeep: (v: boolean) => void
	count: number
}

export default function Toolbar(p: Props) {
	return (
		<section className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
			<div className="flex flex-wrap items-center gap-2">
				<select
					className="select"
					value={p.active}
					onChange={(e) => p.onSetChange(e.target.value as SetKey)}
				>
					{SETS.map((s) => (
						<option key={s.key} value={s.key}>
							{s.label}
						</option>
					))}
				</select>
				<input
					className="input w-72"
					placeholder="Search icons…"
					value={p.query}
					onChange={(e) => p.onQuery(e.target.value)}
				/>
				<span className="tag">{p.count.toLocaleString()} icons</span>
			</div>
			<div className="flex flex-wrap items-center gap-2">
				<label className="flex items-center gap-2 text-sm">
					<span>Size</span>
					<input
						type="number"
						min={12}
						max={96}
						value={p.size}
						onChange={(e) => p.onSize(Number(e.target.value))}
						className="select w-20"
					/>
				</label>
				<label className="flex items-center gap-2 text-sm">
					<span>Stroke</span>
					<input
						type="number"
						step={0.25}
						min={0.5}
						max={3}
						value={p.stroke}
						onChange={(e) => p.onStroke(Number(e.target.value))}
						className="select w-20"
						disabled={!p.strokeEnabled}
					/>
				</label>
				<label className="flex items-center gap-2 text-sm">
					<input
						type="checkbox"
						checked={p.deep}
						onChange={(e) => p.onDeep(e.target.checked)}
						className="accent-brand"
					/>
					Show deep import
				</label>
			</div>
		</section>
	)
}
