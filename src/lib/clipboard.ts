"use client"
import * as React from "react"
export function useClipboard() {
	const [copied, setCopied] = React.useState<string | null>(null)
	const copy = React.useCallback(async (text: string, key: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(key)
			setTimeout(() => setCopied(null), 900)
		} catch {}
	}, [])
	return { copied, copy }
}
