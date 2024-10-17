"use client";
import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from ".";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({});

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
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

    const queryString = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${queryString}`);
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="30"
            min={15}
            value={String(prices.priceTo)}
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
