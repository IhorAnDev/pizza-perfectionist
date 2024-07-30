import React from "react";
import { Title, FilterCheckbox } from ".";

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
    </div>
  );
};
