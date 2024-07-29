import { Categories, Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All foods" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}

/* All Meat Spicy Sweet Vegetarian With chicken More ▼

Sort by: rating */
