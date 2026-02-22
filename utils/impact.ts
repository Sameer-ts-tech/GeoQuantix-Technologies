import { ProjectData } from "@/data/projects"

export function getImpactLabel(
  project: ProjectData,
  metric: "properties" | "demand"
): string {
  if (project.status === "ongoing") {
    return "Survey In Progress"
  }

  const before = project.before?.[metric] ?? 0
  const after = project.after?.[metric] ?? 0

  if (before === 0 && after > 0) {
    return metric === "properties"
      ? "New Properties Identified"
      : "New Demand Generated"
  }

  if (before > 0) {
    const increase = (((after - before) / before) * 100).toFixed(1)
    return `+${increase}% Increase`
  }

  return "No Change"
}
