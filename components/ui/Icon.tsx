import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = (Icons[name] ?? Icons.Circle) as React.ComponentType<{
    className?: string;
  }>;
  return <Cmp className={className} />;
}
