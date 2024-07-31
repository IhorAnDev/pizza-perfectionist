import React from "react";
import { Title, FilterCheckbox } from ".";
import { Input, RangeSlider } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="font-bold mb-5" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="can be delivered" value="1" />
        <FilterCheckbox text="new" value="2" />
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
    </div>
  );
};
