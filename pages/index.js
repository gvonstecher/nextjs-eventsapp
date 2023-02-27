import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import { HomePage } from '@/src/components/home/homepage';
import { Header } from '@/src/components/header/header';
import { Footer } from '@/src/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      	<HomePage data={data}/>
    </>
  )
}

//Carga la data en el server. 
export async function getServerSideProps(context){
	const {events_categories} = await import ('/data/data.json');
	console.log(events_categories);
	return{
		props:{
			data:events_categories,

		}
	}
}