"use client";
import { useEffect, useState } from "react";

export default function useSetQueriesFormat(
  searchParams,
  setFunction,
  setQueries
) {
  const [hasSearchParams, setHasSearchParams] = useState(false);
  useEffect(() => {
    async function checkHasSearchParams() {
      const queryParams = await searchParams;

      if (queryParams?.category || queryParams?.sort) {
        setHasSearchParams(true);
      } else {
        setHasSearchParams(false);
      }
    }

    checkHasSearchParams();
  }, []);

  useEffect(() => {
    async function updateSearchParams() {
      const queryParams = await searchParams;
      const category = queryParams?.category;
      const sort = queryParams?.sort;

      const queriesFormat = hasSearchParams
        ? `?category=${category ? category : ""}&sort=${sort ? sort : ""}`
        : "";
      setFunction(queriesFormat);
    }
    updateSearchParams();
  }, [searchParams]);

  useEffect(() => {
    async function setInitalQueries() {
      const queryParams = await searchParams;
      const category = queryParams?.category;
      const sort = queryParams?.sort;

      if (category || sort) {
        category && setQueries((prev) => ({ ...prev, category: category }));
        sort && setQueries((prev) => ({ ...prev, sort: sort }));
      }
    }
    setInitalQueries();
  }, []);
}
