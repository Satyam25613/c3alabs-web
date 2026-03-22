// Minimal cn utility — joins truthy class names.
// Replaces the shadcn/clsx dependency for this project.
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ');
}
