import style from '@/app/components/styles/ContactForm.module.css'
export default function ContacForm(){
    return <section className={style.container}>
    <h3 className={style.title}>Contacto</h3>
    <form className={style.form}>
        <div className={style.formDetail}>
            <label  >Nombre</label>
            <input className={style.input} type="text" id="name"/>
        </div>
        <div className={style.formDetail}>
            <label>Email</label>
            <input className={style.input} type="email" id="email" />
        </div>
        <div className={style.formDetail}>
            <label className={style.titleMessage}>Mensaje</label>
            <textarea className={style.message} id="message"></textarea>
        </div>
    </form>
</section>
   }