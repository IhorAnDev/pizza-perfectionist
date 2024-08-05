import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductCard,
  ProductsGroupList,
} from "@/components/shared";

const pizzasMock = [
  {
    id: 1,
    name: "Cheeseburger Pizza",
    price: 10,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif",
    items: [{ price: 10, quantity: 1 }],
  },
  {
    id: 2,
    name: "Mexican Pizza",
    price: 12,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 12, quantity: 1 }],
  },
  {
    id: 3,
    name: "Veggie Pizza",
    price: 9,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 9, quantity: 1 }],
  },
  {
    id: 4,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 5,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 6,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 7,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
];
const snakesMock = [
  {
    id: 1,
    name: "Cheeseburger Pizza",
    price: 10,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EF0286349B277780CB97A8544A6AEC.avif",
    items: [{ price: 10, quantity: 1 }],
  },
  {
    id: 2,
    name: "Mexican Pizza",
    price: 12,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 12, quantity: 1 }],
  },
  {
    id: 3,
    name: "Veggie Pizza",
    price: 9,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 9, quantity: 1 }],
  },
  {
    id: 4,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 5,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 6,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
  {
    id: 7,
    name: "Meat Pizza",
    price: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11EF0286069492BA911C4D3B3376436C.avif",
    items: [{ price: 15, quantity: 1 }],
  },
];

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All foods" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[70px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                products={pizzasMock}
              />
              <ProductsGroupList
                title="Snacks"
                categoryId={2}
                products={snakesMock}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

/* All Meat Spicy Sweet Vegetarian With chicken More ▼

Sort by: rating */
