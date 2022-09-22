import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const productos = await prisma.producto.findMany({
    where:{
      categoriaId: 1,
    },
  });

  res.status(200).json(productos)
}