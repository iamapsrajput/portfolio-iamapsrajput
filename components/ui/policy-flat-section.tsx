import { cn } from "@/lib/utils";

interface PolicyFlatSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Always-visible section (no accordion) for document-style policy pages. */
export function PolicyFlatSection({
  id,
  title,
  children,
  className,
}: PolicyFlatSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-xl border border-border/50 bg-card/60 px-5 py-5 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <h2 className="mb-4 text-lg font-bold text-foreground border-b border-border/40 pb-2">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
