import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-20 sm:px-8">
        <div className="flex w-full items-center justify-center">
          <Image
            className="dark:invert opacity-80 hover:opacity-100 transition-opacity"
            src="/next.svg"
            alt="Next.js logo"
            width={140}
            height={28}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-50">
            Welcome to Next.js
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Get started by editing{" "}
            <code className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
              src/app/page.tsx
            </code>
          </p>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Looking for more resources? Explore{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-semibold text-slate-900 dark:text-slate-100 underline decoration-2 decoration-slate-300 dark:decoration-slate-700 hover:decoration-slate-500 dark:hover:decoration-slate-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-semibold text-slate-900 dark:text-slate-100 underline decoration-2 decoration-slate-300 dark:decoration-slate-700 hover:decoration-slate-500 dark:hover:decoration-slate-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning Center
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 px-6 text-slate-50 dark:text-slate-900 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            href="https://vercel.com/new?utm_source=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-lg border-2 border-slate-300 dark:border-slate-700 px-6 font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
