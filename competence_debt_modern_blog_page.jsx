import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Bug, Wrench, Shield, Rocket, BookOpen, ScrollText } from "lucide-react";

export default function BlogPage() {
  const readTime = useMemo(() => 8, []);

  const points = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Experience → Reflection → Mastery",
      body: (
        <>
          <p className="mb-3">Seasoned engineers don’t just "know a language"—they’ve built <em>mental models</em> through a repeating loop of writing, breaking, debugging, and refactoring across many projects, domains, and stacks.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Implementation practice:</span> Hundreds of hand‑rolled modules—REST endpoints in Go, components in TypeScript, schedulers in Java. Every stack forces you to learn its idioms (Go’s errors, Rust’s borrow checker, etc.).
            </li>
            <li>
              <span className="font-semibold">Edge cases hurt (in a good way):</span> Real data bites—nulls in JSON, version drift, GC pauses, race conditions.
            </li>
            <li>
              <span className="font-semibold">Deep debugging:</span> Stepping through code, profiling CPU/memory, reading bytecode, thread dumps. That grind forges intuition.
            </li>
            <li>
              <span className="font-semibold">Refactor → extract patterns:</span> After solving problems in multiple contexts, you see the <em>shape</em> (e.g., Strategy over an Adapter) and know when it helps—or hurts.
            </li>
            <li>
              <span className="font-semibold">Teach it:</span> Mentoring forces you to compress complex systems into clear mental models.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "What AI‑First Engineers Miss",
      body: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Shallow familiarity:</span> AI scaffolds controllers and schemas, but you never wrestle with backpressure, nulls, or protocol upgrades yourself.
            </li>
            <li>
              <span className="font-semibold">No pattern training:</span> You saw the code—but didn’t refactor it three times, so abstractions never crystallize.
            </li>
            <li>
              <span className="font-semibold">Debugging at arm’s length:</span> Re‑prompting beats tracing stack traces, logs, and metrics; tool muscle memory never forms.
            </li>
            <li>
              <span className="font-semibold">Over‑reliance on magic:</span> Software becomes “plug‑and‑play,” not craft—trade‑offs and constraints get ignored.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Downstream Risks",
      body: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Black‑box maintenance:</span> Teams inherit code they can’t explain; minor bugs snowball into outages while people re‑prompt for a fix.
            </li>
            <li>
              <span className="font-semibold">Security blindspots:</span> AI can introduce subtle injections/serialization flaws that nobody recognizes.
            </li>
            <li>
              <span className="font-semibold">Stunted growth:</span> Prompt‑only juniors plateau; no credibility to architect or lead refactors.
            </li>
            <li>
              <span className="font-semibold">Innovation bottlenecks:</span> Novel domains (consensus, realtime graphics, new hardware) need deep mental models—not autocomplete.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Preserve the Mastery Cycle (with AI as a tool)",
      body: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Hands‑on sprints:</span> Build key subsystems from scratch—no AI—then compare against generated scaffolds.
            </li>
            <li>
              <span className="font-semibold">Rotate on‑call/debug duty:</span> Everyone diagnoses and fixes prod incidents without re‑prompting.
            </li>
            <li>
              <span className="font-semibold">No‑AI pairing days:</span> Keep implementation/design muscles strong.
            </li>
            <li>
              <span className="font-semibold">Design before code:</span> Whiteboard the architecture, interfaces, and failure modes before touching any AI.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10" />
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Essay • {readTime} min read
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            Competence Debt:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300"> Skip the Grind, Lose the Mind</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-3xl text-pretty text-lg text-neutral-300">
            The uncomfortable truth: if a new breed of engineers leans entirely on AI tools (Cursor, Kiro, etc.) and never learns to <em>write</em>, <em>break</em>, and <em>repair</em> software by hand, they’ll miss the very loop that makes complex problem‑solving possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Bug className="h-4 w-4" /> Debugging
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Cpu className="h-4 w-4" /> Mental Models
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Shield className="h-4 w-4" /> Reliability
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Rocket className="h-4 w-4" /> Career Growth
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-[1fr_280px]">
        <article className="space-y-10">
          {/* TL;DR */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 flex items-center gap-2 text-neutral-300">
              <ScrollText className="h-5 w-5" />
              <h2 className="text-lg font-semibold tracking-tight">TL;DR</h2>
            </div>
            <p className="text-neutral-300">
              Senior engineers carry a hard‑won library of first‑hand failures and fixes. That experience is forged by the
              <span className="font-semibold"> Experience → Reflection → Mastery</span> loop. Skip it—and you accrue <span className="font-semibold">competence debt</span> that shows up as fragile systems, security holes, and stalled careers.
            </p>
          </section>

          {/* Sections from provided content */}
          {points.map((p, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2">{p.icon}</div>
                <h2 className="text-xl font-semibold tracking-tight">{p.title}</h2>
              </div>
              <div className="prose prose-invert max-w-none text-neutral-300 prose-li:marker:text-neutral-500">
                {p.body}
              </div>
            </motion.section>
          ))}

          {/* Pull quote */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <blockquote className="text-balance border-l-4 border-emerald-400/60 pl-4 text-xl italic text-neutral-200">
              "The superpower of senior engineers isn’t syntax—it’s a dense map of prior failures and the instincts to avoid them."
            </blockquote>
          </section>

          {/* Closing */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-lg font-semibold">Bottom line</h3>
            <p className="text-neutral-300">
              AI should accelerate learning—not replace it. Use Cursor, Kiro, and friends, but keep your hands on the metal. Build, break, debug, refactor.
              That cycle is how you earn the judgment to tackle the unknowns waiting in tomorrow’s systems.
            </p>
            <a href="#practice" className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:underline">
              Practice prompts → projects → postmortems <ArrowRight className="h-4 w-4" />
            </a>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 md:sticky md:top-6 md:h-fit">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">On this page</h4>
            <nav className="space-y-2">
              {points.map((p, i) => (
                <a key={i} href={`#sec-${i}`} className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/10">
                  {p.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">Try this</h4>
            <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2">
              <li>Pick a subsystem you rely on and rebuild it from scratch this weekend.</li>
              <li>Resolve your next prod incident without any AI prompts. Write a short postmortem.</li>
              <li>Refactor a generated module twice—extract interfaces, measure before/after.</li>
              <li>Shadow a senior during a deep‑dive debug session and take notes on their moves.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">Tags</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "craft",
                "debugging",
                "architecture",
                "engineering‑culture",
                "ai‑tools",
              ].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-neutral-300">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Competence Debt — Written for engineers who still touch the metal.
        </div>
      </footer>
    </div>
  );
}
