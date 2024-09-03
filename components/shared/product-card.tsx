import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce,
          tomatoes, alfredo sauce, garlic.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} €</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Add to cart
          </Button>
        </div>
      </Link>
    </div>
  );
};