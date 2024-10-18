"use client";
import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from ".";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface Queryfilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof Queryfilters,
    string
  >;
  const router = useRouter();
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: toggleTypes }] = useSet(new Set<string>([]));

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const filteredFilters: Partial<Queryfilters> = {
      ...(filters.priceFrom !== undefined && filters.priceFrom !== 0
        ? { priceFrom: filters.priceFrom }
        : {}),
      ...(filters.priceTo !== undefined && filters.priceTo !== 30
        ? { priceTo: filters.priceTo }
        : {}),
      ...(filters.pizzaTypes.length > 0
        ? { pizzaTypes: filters.pizzaTypes.join(",") }
        : {}),
      ...(filters.sizes.length > 0 ? { sizes: filters.sizes.join(",") } : {}),
      ...(filters.ingredients.length > 0
        ? { ingredients: filters.ingredients.join(",") }
        : {}),
    };

    const queryString = qs.stringify(filteredFilters, {
      arrayFormat: "comma",
    });

    router.push(`?${queryString}`, { scroll: false });
  }, [prices, pizzaTypes, sizes, selectedIngredients, router]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="font-bold mb-5" />

      <CheckboxFiltersGroup
        title="Types"
        className="mt-5"
        onClickCheckbox={toggleTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Classic", value: "2" },
        ]}
        selectedValues={pizzaTypes}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        className="mt-5"
        onClickCheckbox={toggleSizes}
        items={[
          { value: "Small", text: "20 cm" },
          { value: "Medium", text: "30 cm" },
          { value: "Large", text: "40 cm" },
        ]}
        selectedValues={sizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex mb-5 gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30}
            value={
              prices.priceFrom !== undefined ? String(prices.priceFrom) : "0"
            }
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="30"
            min={15}
            value={prices.priceTo !== undefined ? String(prices.priceTo) : "30"}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={30}
          step={1}
          value={[prices.priceFrom || 0, prices.priceTo || 30]}
          onValueChange={([from, to]) =>
            setPrice({ priceFrom: from, priceTo: to })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedValues={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
