import "./Hero.css"
import Button from "./atoms/Button"

export default function Hero() { 
    return (<section className="hero">
        <div> This is hero </div>
        <Button type="button-success" >Click Me</Button>
        <Button type="button-danger" >Click Me</Button>
        <Button >Click Me</Button>
        <div> Buy this product </div>
    </section>)
}
