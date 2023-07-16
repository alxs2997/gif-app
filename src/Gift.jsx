import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
    inicial: { opacity: 0, scale: 0.5 },
    animate: ({ index }) => ({
        opacity: 1,
         scale: 1, 
         transition: { 
            delay: index * .2 }
    })
}

//la libreria framer-motion te permite hacer animaciones y es especial para react



export const Gift = ({ gift, index }) => {

    const ref = useRef(null)
    //"once:true" esto me le dice al hook que solo se ejecute una vez
    const estaVisto = useInView(ref, {once: true})

    return (
        <motion.img
            ref={ref}
            initial="inicial"
            animate={estaVisto ? "animate" : ""}
            variants={variants}
            custom={{ index }}
            whileHover={{ scale: 1.1, duration: 0 }}
            key={gift.id}
            className="gift"
            src={gift.images.downsized_medium.url}
            alt={gift.title} />
    )
}