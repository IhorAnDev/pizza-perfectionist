"use client";
import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from ".";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  products: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  title,
  products,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.2,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map(({ items, imageUrl, name, id }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={items[0].price}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
