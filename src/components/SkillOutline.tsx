import { IconType } from "react-icons";
import { cn } from "../lib/utils";

interface SkillOutlineProps {
  Icon: IconType;
  text: string;
  className?: string;
}

export default function SkillOutline({ Icon, text, className }: SkillOutlineProps) {
  return (
    <div
      className={cn(
        "group flex items-center space-x-2 rounded-lg border border-github-border bg-github-darker/50 px-3 py-2 transition-colors hover:bg-github-darker",
        className
      )}
    >
      <Icon className="h-5 w-5 text-github-accent group-hover:text-pink-300 transition-colors" />
      <span className="text-sm text-github-text">{text}</span>
    </div>
  );
}
