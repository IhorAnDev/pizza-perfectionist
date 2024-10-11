"use client";
import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from ".";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

interface Props {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="font-bold mb-5" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="delivery" text="can be delivered" value="1" />
        <FilterCheckbox name="new" text="new" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex mb-5 gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30}
            defaultValue={0}
          />
          <Input type="number" placeholder="30" min={15} />
        </div>
        <RangeSlider min={0} max={30} step={1} value={[0, 30]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        name="ingredients"
      />
    </div>
  );
};
