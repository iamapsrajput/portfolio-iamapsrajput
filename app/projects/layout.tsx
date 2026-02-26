import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects and open source contributions",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
