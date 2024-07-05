import Image from 'next/image'
import style from '@/app/components/styles/About.module.css'
export default function About(){
    return (<section className={style.container}>
    <div className={style.containerBody}>
        <Image className={style.image} src="/avatar.png" alt="user avatar" width={200} height={200}/>
        <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta, at repudiandae, quam reprehenderit sapiente nobis maxime unde doloremque fugiat similique eius. Dolorem, repudiandae! Quas maxime totam ut illum quibusdam.</p>
    </div>
</section>)
   }