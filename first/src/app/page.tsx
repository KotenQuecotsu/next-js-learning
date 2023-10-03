import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header'

export default function Home() {
  const buttons = ["Категория 1", "Категория 2", "Категория 3"]
  return (
    <>
    <Header buttons = {buttons}/>
    </>
  )
}
