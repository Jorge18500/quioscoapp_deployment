// import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Producto from '../components/Producto'

export default function Home() {

  // useEffect(()=>{
  //   const consultarDB = async ()=>{
  //     const prisma= new PrismaClient()

  //     const categorias = await prisma.categoria.findMany()
  //   }
  // },[])
  /*en nextjs para consultar una db se hace desde serversideprops o api, ya que solo corren en el servidor, desde el cliente no funciona */

  const {categoriaActual} = useQuiosco()

  return (
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>

        <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuacion</p>

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {categoriaActual?.productos?.map(producto=>(
            <Producto 
              key={producto.id} 
              producto={producto} 
            />
            ))}
        </div>

        
      </Layout>
  )
}

