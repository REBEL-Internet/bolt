import { getScoreColor } from "@/lib/score-utils";

interface ScoreBadgeProps {
  score: number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  return (
    <div className={`font-semibold text-[16px] text-center ${getScoreColor(score)}`}>
      {score}
    </div>
  );
}