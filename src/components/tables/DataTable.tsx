"use client";

import { useId, useMemo, useState } from "react";
import { CustomSelect } from "@/components/forms/CustomSelect";

export type DataTableColumn = {
  key: string;
  label: string;
  className?: string;
};

export type DataTableRow = {
  id: string;
  [key: string]: string;
};

type DataTableFilter = {
  key: string;
  label: string;
  allLabel: string;
  options: { label: string; value: string }[];
};

type DataTableProps = {
  columns: DataTableColumn[];
  rows: DataTableRow[];
  searchLabel: string;
  searchPlaceholder?: string;
  filter?: DataTableFilter;
  emptyMessage?: string;
};

/**
 * A small, content-first data table for public lists such as services, roles,
 * and future inventory. Keep the row shape at the route boundary so it can be
 * swapped for API data without changing the table UI.
 */
export function DataTable({
  columns,
  rows,
  searchLabel,
  searchPlaceholder = "Search",
  filter,
  emptyMessage = "No matching results.",
}: DataTableProps) {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterLabelId = useId();

  const visibleRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        columns.some((column) =>
          row[column.key]?.toLowerCase().includes(normalizedQuery),
        );
      const matchesFilter =
        !filter || !selectedFilter || row[filter.key] === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [columns, filter, query, rows, selectedFilter]);

  return (
    <div className="overflow-hidden border border-brand-gold-light bg-white">
      <div className="flex flex-col gap-1 border-b border-brand-gold-light p-2">
        <label className="text-xs text-brand-navy" htmlFor={`${searchLabel}-search`}>
          {searchLabel}
        </label>
        <input
          id={`${searchLabel}-search`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="luah-table-search min-h-8 w-full border border-brand-gold-light px-2 text-base text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold"
        />
        {filter && (
          <>
            <span id={filterLabelId} className="sr-only">
              {filter.label}
            </span>
            <div className="w-fit">
              <CustomSelect
                ariaLabelledBy={filterLabelId}
                defaultValue=""
                name={`${searchLabel}-filter`}
                options={[{ label: filter.allLabel, value: "" }, ...filter.options]}
                onValueChange={setSelectedFilter}
                size="compact"
                containerClassName="relative"
              />
            </div>
          </>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-brand-gold-light text-xs font-bold text-white">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`px-3 py-2 ${column.className ?? ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs leading-[1.4] text-brand-navy">
            {visibleRows.map((row) => (
              <tr key={row.id} className="border-t border-brand-gold-light">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-3 py-3 align-top ${column.className ?? ""}`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleRows.length === 0 && (
        <p className="border-t border-brand-gold-light px-3 py-5 text-center text-sm text-brand-muted">
          {emptyMessage}
        </p>
      )}
    </div>
  );
}
