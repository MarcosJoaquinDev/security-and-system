import Image from 'next/image'
import style from '@/app/components/styles/Header.module.css'

export default function Header(){
 return (
 <header className={style.container} >
    <aside className={style.aside} >
         <Image src="/profile.jpg" alt='profile pic' className={style.image} width={300} height={300}/> 
         <h1 className={style.title}>Marcos Joaquin Acuña</h1>
    </aside>
</header>)

}