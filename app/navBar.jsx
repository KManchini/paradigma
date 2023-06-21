import Link from "next/link"
import {rajdhani} from './components/fonts'
import './components/nav-style.scss'
import Aligator from './components/aligator'

export default function Navbar () {

    function paradigmaList () {
        return (
            <div className="mobileList">
                <div className="sectionHeader">
                    Almost Another
                </div>
                <div>
                    <MenuLink href="/paradigm_breakig">Breaking the Paradigm</MenuLink>
                    <MenuLink href="/novel_world">World of the Novel</MenuLink>
                    <MenuLink href="/characters">Characters</MenuLink>
                </div>
                <div className="sectionHeader">
                    Real One
                </div>
                <div>
                    <MenuLink href="/actors">Perspectives & Insights </MenuLink>
                    <MenuLink href="/articles">Get in Touch</MenuLink>
                    <MenuLink href="/articles">Our Patrons</MenuLink>
                </div>
            </div>
        )
    }
    
    return (
        <nav>
            <div className="onlyDesk">
                <div className={rajdhani.className}>
                    <div className='topNavCont'>
                        <nav className='topNav'>
                            <Link className='almostClass' href="/">Almost Another&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;&nbsp;Real One</Link>
                            <ul>
                                <div>
                                    <MenuLink href="/paradigm_breakig">Breaking the Paradigm</MenuLink>
                                    <MenuLink href="/novel_world">World of the Novel</MenuLink>
                                    <MenuLink href="/characters">Characters</MenuLink>
                                </div>
                                <div>
                                    <MenuLink href="/articles">Perspectives & Insights </MenuLink>
                                    <MenuLink href="/articles">Get in Touch</MenuLink>
                                    <MenuLink href="/articles" className="patronsClass">Our Patrons</MenuLink>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="onlyMob">
                <Aligator>{paradigmaList()}</Aligator> 
            </div>
        </nav>
    )
}
function MenuLink ({ href, children, ...props }) {

        return (
            <li>
                <Link href={href} {...props}>{children}</Link>
            </li>
        )

}