import * as Lucide from "@aura-ui/icons/lucide"
import * as HeroOutline from "@aura-ui/icons/heroicons/outline"
import * as HeroSolid from "@aura-ui/icons/heroicons/solid"
import * as Phosphor from "@aura-ui/icons/phosphor"
import * as Radix from "@aura-ui/icons/radix"
import * as Tabler from "@aura-ui/icons/tabler"

export type IconComp = React.ComponentType<React.SVGProps<SVGSVGElement>>

export const SETS = [
	{
		key: "lucide",
		label: "Lucide",
		mod: Lucide,
		pkg: "@aura-ui/icons/lucide",
		stroke: true
	},
	{
		key: "heroicons/outline",
		label: "Heroicons • Outline",
		mod: HeroOutline,
		pkg: "@aura-ui/icons/heroicons/outline",
		stroke: true
	},
	{
		key: "heroicons/solid",
		label: "Heroicons • Solid",
		mod: HeroSolid,
		pkg: "@aura-ui/icons/heroicons/solid",
		stroke: false
	},
	{
		key: "phosphor",
		label: "Phosphor",
		mod: Phosphor,
		pkg: "@aura-ui/icons/phosphor",
		stroke: true
	},
	{
		key: "radix",
		label: "Radix",
		mod: Radix,
		pkg: "@aura-ui/icons/radix",
		stroke: true
	},
	{
		key: "tabler",
		label: "Tabler",
		mod: Tabler,
		pkg: "@aura-ui/icons/tabler",
		stroke: true
	}
] as const

export type SetKey = (typeof SETS)[number]["key"]
