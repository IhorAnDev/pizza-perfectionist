import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          productItems: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All foods" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter((cat) => cat.products.length > 0)}
      />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[70px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
