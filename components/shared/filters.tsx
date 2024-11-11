"use client";
import React from "react";
import { Title, CheckboxFiltersGroup } from ".";
import { Input, RangeSlider } from "../ui";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();

  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="font-bold mb-5" />

      <CheckboxFiltersGroup
        title="Types"
        className="mt-5"
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Classic", value: "2" },
        ]}
        selectedValues={filters.pizzaTypes}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        className="mt-5"
        onClickCheckbox={filters.setSizes}
        items={[
          { value: "Small", text: "20 cm" },
          { value: "Medium", text: "30 cm" },
          { value: "Large", text: "40 cm" },
        ]}
        selectedValues={filters.sizes}
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
              filters.prices.priceFrom !== undefined
                ? String(filters.prices.priceFrom)
                : "0"
            }
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="30"
            min={15}
            value={
              filters.prices.priceTo !== undefined
                ? String(filters.prices.priceTo)
                : "30"
            }
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={30}
          step={1}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 30]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
