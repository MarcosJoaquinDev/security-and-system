import Image from 'next/image';
import style from "@/app/components/styles/Interesting.module.css"
export default function Hobbies(){
    return(  
    <section className={style.hobies}>
       <h3 className={style.title}>Mis Intereses</h3>
       <ul className={style.items}>
        <Item src="/hoby-1.png" title="interes 1"/>
        <Item src="/hoby-2.png" title="interes 2"/>
        <Item src="/hoby-3.png" title="interes 3"/>
       </ul>
    </section>)
   }

const Item = (prop:any)=>{
    return (<li className={style.item}>
    <Image className={style.itemImg} src={prop.src} alt="user avatar" width={130} height={130}/>
    <h4 className={style.itemTitle}>{prop.title}</h4>
    <p className={style.itemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora nisi ipsa minus ab nulla molestiae excepturi in. Animi, reiciendis. Aliquam possimus autem ea incidunt quos quaerat deserunt inventore itaque.</p>
</li>
)
}