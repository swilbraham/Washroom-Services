import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  new: "bg-sky/10 text-sky",
  contacted: "bg-warning/10 text-warning",
  closed: "bg-success/10 text-success",
  "in-stock": "bg-success/10 text-success",
  "low-stock": "bg-warning/10 text-warning",
  "out-of-stock": "bg-red-100 text-red-600",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full capitalize", variants[status] || "bg-gray-100 text-gray-600")}>
      {status.replace("-", " ")}
    </span>
  );
}
