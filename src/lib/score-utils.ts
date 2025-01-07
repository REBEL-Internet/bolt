// Calculate color based on score (0-100)
export function getScoreColor(score: number): string {
  if (score >= 90) return "text-emerald-500";
  if (score >= 80) return "text-green-500";
  if (score >= 70) return "text-lime-500";
  if (score >= 60) return "text-yellow-500";
  return "text-red-500";
}