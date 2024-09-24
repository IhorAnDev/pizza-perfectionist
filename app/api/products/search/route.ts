import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
  const query = searchParams.get("query") || "";
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
  return NextResponse.json(products);
}
