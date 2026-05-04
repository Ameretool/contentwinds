import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  basePath: string; // e.g. "/blog"
  perPage: number;
  onPerPageChange?: (n: number) => void;
}

export const Pagination = ({ page, totalPages, basePath, perPage, onPerPageChange }: Props) => {
  if (totalPages <= 1 && !onPerPageChange) return null;
  const link = (p: number) => (p === 1 ? basePath : `${basePath}?page=${p}`);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mt-8 pt-6 border-t border-border/60">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Per page:</span>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange?.(Number(e.target.value))}
          className="bg-background border border-border rounded-md px-2 py-1 text-sm"
        >
          {[5, 10, 20, 50].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm" disabled={page <= 1}>
          <Link to={link(Math.max(1, page - 1))} aria-disabled={page <= 1}>
            <ChevronLeft className="h-4 w-4" /> Prev
          </Link>
        </Button>
        <span className="text-sm text-muted-foreground tabular-nums">
          {page} / {Math.max(1, totalPages)}
        </span>
        <Button asChild variant="outline" size="sm" disabled={page >= totalPages}>
          <Link to={link(Math.min(totalPages, page + 1))} aria-disabled={page >= totalPages}>
            Next <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
