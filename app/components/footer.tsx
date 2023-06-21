import Link from "next/link"
import {open_Sans} from './fonts'
import './footer-style.scss'
import { twitterLogo } from "./time_is_up"

export default function Footer() {
    return (
        <div className={open_Sans.className}>
            <div className="footerClass">
                <div className="footerHeader">
                    <h1>Breaking the Paradigm</h1>
                </div>
                <div className="footerSection">
                    <div className="sectionHeader">
                        Almost Another Universe
                    </div>
                    <div className="menuSection">
                        <div>
                            <Link href="/paradigm_breakig">Breaking the Paradigm</Link>
                        </div>
                        <div>
                            <Link href="/novel_world">World of the Novel</Link>
                        </div>
                        <div>    
                            <Link href="/characters">Characters</Link>
                        </div>
                    </div>
                </div>
                <div className="footerSection">
                    <div className="sectionHeader">
                        Real Universe
                    </div>
                    <div className="menuSection">
                        <div>
                            <Link href="/paradigm_breakig">Perspectives & Insights</Link>
                        </div>
                        <div>    
                            <Link href="/novel_world">About me</Link>
                        </div>
                        <div>
                            <Link href="/characters">Get in Touch</Link>
                        </div>
                    </div>
                </div>
                <div className="socialSection">
                    <div>
                    Check out our social networks
                    </div>
                    <div className="socialLogoblock">
                        <Link href=''>{twitterLogo()}</Link> 
                    </div>
                </div>



            </div>
        </div>
    )
}
