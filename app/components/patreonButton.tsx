import './patreonStyle.scss'
import Link from "next/link";
import { open_Sans } from './fonts';

export default function PatreonButton (){
    return (
        <div className={open_Sans.className}>
            <div className="patreonButton">
                <Link href='https://www.patreon.com/breaking_the_paradigm'>
                    <div>Support the project,</div>
                    <div>Become a Patron</div>
                </Link>
            </div>
        </div>
    )
}