import React from "react";
import { Filters, Queryfilters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    // TODO separate logic
    const filteredFilters: Partial<Queryfilters> = {
      ...(params.priceFrom !== undefined && params.priceFrom !== 0
        ? { priceFrom: params.priceFrom }
        : {}),
      ...(params.priceTo !== undefined && params.priceTo !== 30
        ? { priceTo: params.priceTo }
        : {}),
      ...(params.pizzaTypes.length > 0
        ? { pizzaTypes: params.pizzaTypes.join(",") }
        : {}),
      ...(params.sizes.length > 0 ? { sizes: params.sizes.join(",") } : {}),
      ...(params.ingredients.length > 0
        ? { ingredients: params.ingredients.join(",") }
        : {}),
    };

    const queryString = qs.stringify(filteredFilters, {
      arrayFormat: "comma",
    });

    router.push(`?${queryString}`, { scroll: false });
  }, [filters, router]);
};
