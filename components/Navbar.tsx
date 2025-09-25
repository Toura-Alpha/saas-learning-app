import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href='/'>
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image
                        src={"/images/logo.svg"} 
                        alt='logo' 
                        width={46} 
                        height={44}
                        priority
                    />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <NavItems/>
                <SignedOut>
                    {/* <div className='flex items-center gap-2'> */}
                       <SignInButton>
                            <button className='btn-signin'>Sign In</button>
                       </SignInButton>
                    {/* </div> */}
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
