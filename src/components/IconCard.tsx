"use client"
import * as React from "react"
import { useClipboard } from "@/lib/clipboard"

type Props = {
	name: string
	Comp: React.ComponentType<React.SVGProps<SVGSVGElement>>
	size: number
	stroke?: number
	pkg: string
	deep?: boolean
}

export default function IconCard({
	name,
	Comp,
	size,
	stroke,
	pkg,
	deep
}: Props) {
	const { copied, copy } = useClipboard()
	const importNamed = `import { ${name} } from '${pkg}';`
	const importDeep = `import ${name} from '${pkg}/${name}';`
	const usage = `<${name} width={${size}} height={${size}}${
		stroke ? ` strokeWidth={${stroke}}` : ""
	} />`

	return (
		<article className="card flex flex-col gap-2" title={name}>
			<div className="h-[84px] grid place-items-center">
				<Comp
					width={size}
					height={size}
					{...(stroke ? { strokeWidth: stroke } : {})}
					aria-hidden
				/>
			</div>
			<div className="truncate text-xs text-text-muted">{name}</div>
			<div className="flex gap-2">
				<button
					className="btn flex-1"
					onClick={() =>
						copy(deep ? importDeep : importNamed, `imp-${name}`)
					}
				>
					{copied === `imp-${name}`
						? "Copied ✓"
						: deep
						? "Copy deep import"
						: "Copy import"}
				</button>
				<button
					className="btn flex-1"
					onClick={() => copy(usage, `use-${name}`)}
				>
					{copied === `use-${name}` ? "Copied ✓" : "Copy usage"}
				</button>
			</div>
		</article>
	)
}
