import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All foods" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">List of foods</div>
          </div>
        </div>
      </Container>
    </>
  );
}

/* All Meat Spicy Sweet Vegetarian With chicken More ▼

Sort by: rating */
