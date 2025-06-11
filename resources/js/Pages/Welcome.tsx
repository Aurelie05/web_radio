import Guest from '@/Layouts/GuestLayout';
import React from 'react';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import '@/Style/welcome.css'
import { FaPlay } from "react-icons/fa6";
import image from "@/Assets/empty-notebook-microphone.jpg"
import card1 from "@/Assets/blank-white-spiral-notepad-with-headphone-speaker-orange-background.jpg"
import card2 from "@/Assets/close-up-microphone-pop-filter.jpg"
import card3 from "@/Assets/blank-white-spiral-notepad-with-headphone-speaker-red-background.jpg"


export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <Guest>
            <Head title="Frequence vie" />
            <div className="container">
                
                <div className="firstimage">
                    <img src="https://frequencevieyakro.ci/imagewebradio/empty-notebook-microphone.jpg" alt="" />
                    <div className='musique'>
                        <a href="https://play.radioking.io/frequence-vie-yamoussoukro"  rel="noopener noreferrer">
                            Ecoutez le direct <FaPlay />
                        </a>
                    </div>
                </div>
                <div className='section2'>
                    <h2>Nos Programmes</h2>
                    <div className='cards'>
                       <div className='card'><img src="https://frequencevieyakro.ci/imagewebradio/blank-white-spiral-notepad-with-headphone-speaker-orange-background.jpg" alt="" /></div>
                        <div className='card'><img src="https://frequencevieyakro.ci/imagewebradio/close-up-microphone-pop-filter.jpg" alt="" /></div>
                        <div className='card'><img src="https://frequencevieyakro.ci/imagewebradio/blank-white-spiral-notepad-with-headphone-speaker-red-background.jpg" alt="" /></div>
                        
                    </div>
                </div>
               
            </div>
        </Guest>
    );
}
