import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import logo from "@/Assets/frequence.jpg"
import "@/Style/Guest.css"
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="guestcontainer">
            
            <div className='navbar'>
                <img src={logo} alt="" />
                <div className='elemt1'>Accueil</div>
                <div className='elemt2'>Contact</div>

            </div>
            
            
            
            
            <div>
                {children}
            </div>
        </div>
    );
}
