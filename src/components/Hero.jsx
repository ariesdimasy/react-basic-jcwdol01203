import style from "./Hero.module.css"
// import "./Hero.module.css"
import Button from "./atoms/Button"

export default function Hero() { 
    return (<section className={`${style['hero-section']} ${style['apa']}`}>
        <div> This is hero </div>
        <Button type="button-success" >Click Me</Button>
        <Button type="button-danger" >Click Me</Button>
        <Button >Click Me</Button>
        <div> Buy this product </div>
    </section>)
}
