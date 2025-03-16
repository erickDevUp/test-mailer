import React, { useState, useEffect } from "react";
import { useSearchQuery } from "../hooks/useSearchQuery";

interface GlobalSearchProps {
  query?: string;
  setQuery?: (q: string) => void;
}

export default function GlobalSearch({ query, setQuery }: GlobalSearchProps) {
  const { query: hookQuery, setQuery: hookSetQuery } = useSearchQuery();

  const currentQuery = query !== undefined ? query : hookQuery;
  const currentSetQuery = (q: string) => {
    if (setQuery !== undefined) {
      setQuery(q);
    }
    hookSetQuery(q);
  };
  const [localQuery, setLocalQuery] = useState(currentQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentSetQuery(localQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [localQuery, currentSetQuery]);
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
    </div>
  );
}
