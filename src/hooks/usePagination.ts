import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const usePagination = (totalItems: number, defaultPerPage = 10) => {
  const [params, setParams] = useSearchParams();
  const [perPage, setPerPageState] = useState(defaultPerPage);
  const page = Math.max(1, Number(params.get("page") || 1));
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const setPerPage = (n: number) => {
    setPerPageState(n);
    const next = new URLSearchParams(params);
    next.delete("page");
    setParams(next, { replace: true });
  };

  return { page, perPage, totalPages, start, end, setPerPage };
};
