import { cn } from "@/lib/utils";

/** Styled paragraph for policy body text */
export function PolicyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mb-3 last:mb-0 text-muted-foreground", className)}>
      {children}
    </p>
  );
}

/** Styled list for policy content */
export function PolicyList({
  items,
  ordered = false,
  className,
}: {
  items: React.ReactNode[];
  ordered?: boolean;
  className?: string;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      className={cn(
        "mb-3 list-disc space-y-1.5 pl-5 text-muted-foreground last:mb-0",
        ordered && "list-decimal",
        className
      )}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </List>
  );
}

/** Highlight a term (e.g. "Contact Information:") in policy text */
export function PolicyStrong({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-foreground">
      {children}
    </span>
  );
}
