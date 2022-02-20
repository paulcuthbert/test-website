import React from 'react'
import DPEALogo from '../media/dpea_logo_transparent_400x400.png'

export function Header() {
    return (
        <header>
            <nav>
                <a class="text-black bg-[#7d7abc]" href="./home.html">All Projects</a>
                <a class="p-[16px] self-start bg-[#ffe347]" href="./luminism.html">Luminism Shadow Box</a>
                <a class="z-0 grid" href="https://www.dpengineering.org/" target="_blank"><img src={DPEALogo}/></a>
                <a class="LS" href="./lightsculpture.html">Light Sculpture</a>
                <a class="KS" href="./kineticsculpture.html">Kinetic Sculpture</a>
            </nav>
            <h1 class="home">All DPEA Projects</h1>
        </header>
    )
}