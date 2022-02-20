import React from 'react';
import DPEALogo from '../media/dpea_logo_transparent_400x400.png'

export function Footer() {
    return(
        <footer>
            <div>
            <a href="https://www.dpengineering.org/" target="_blank">
                <img src={DPEALogo} />
            </a>
            </div>
        </footer>
    )
}