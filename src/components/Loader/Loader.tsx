"use client";

import { useState , useEffect, } from "react";
import { motion } from "framer-motion"
import "./style.css"

export default function Loader () {

    const [messageIndex, setMessageIndex] = useState<number>(0)
    const [messages] = useState<string[]>([ "Hello! Welcome.", "My current reads."]);
    const [displayedText, setDisplayedText] = useState<string>("")
    const [charIndex, setCharIndex] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
            setDisplayedText("")
            setCharIndex(0) 
        }, 5000)

        return () => clearInterval(intervalId)
    }, [messages.length])

    useEffect(() => {   
        if (charIndex < messages[messageIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + messages[messageIndex][charIndex])
                setCharIndex((prev) => prev + 1)
            }, 100)

            return () => clearInterval(timeoutId)
        }

    }, [charIndex, messageIndex, messages])


    const bounceAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: [50, -20, 0],
            transition: {
                duration: 1,
                ease: "easeOut",
          },
        },
      }

    return (
        <div className="Loader">
           <motion.h1 id="Name-Perso" variants={ bounceAnimation } initial="hidden" animate="visible">
                {displayedText}
           </motion.h1>           
        </div>
    )
}