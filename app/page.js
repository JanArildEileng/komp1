import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h2><Link href="/jaei">Jan</Link> </h2>
      {/* Legg til din root link her  */} 
      <h2><Link href="/jaei">Jan2</Link></h2>
    </>
  )
}
