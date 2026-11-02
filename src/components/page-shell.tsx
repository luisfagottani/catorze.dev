import {
  eyebrow,
  header,
  heading,
  main,
  stage,
  stageHint,
} from "./page-shell.css";

interface SectionShellProps {
  children?: React.ReactNode;
  title?: string;
}

export function PageShell({ children, title }: SectionShellProps) {
  return (
    <main className={main}>
      <header className={header}>
        <h1 className={eyebrow}>14/FYI</h1>
        <h2 className={heading}>{title}</h2>
      </header>
      <section aria-label="Área do exercício" className={stage}>
        {children ?? <p className={stageHint}>Section content goes here.</p>}
      </section>
    </main>
  );
}
