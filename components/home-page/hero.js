import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/grey.jpg" 
                alt="An image showing Sergey" 
                width={300} 
                height={300} 
            />
        </div>
        <h1>Hi, I'm Sergey</h1>
        <p> 
            I blog about full stack works and projects- espesially about NextJS
        </p>
    </section>
}

export default Hero;