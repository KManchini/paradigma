
import { rajdhani } from './components/fonts'
import { TimeIsUpLeft } from './components/time_is_up'
import Link from 'next/link'
import './components/home-style.scss'
import PatreonButton from './components/patreonButton'
 

export default function Home() {



  return (
    <main> 
      <PatreonButton />
      <div className='firstPage'>
        <div className='mainImage'>
          <img
            src='https://almostanother.com/images/time.webp' alt='Time is Up'
          />
        </div>
        <div className={rajdhani.className}>
          <div className='introText'>
            <h2>
              Time is up, but maybe
            </h2>
            <h1>
            There is a solution ...<br/>
            just maybe

            </h1>
            <h2>
              Navigating the Depths: <br/>Fictional Insights for a Changing Reality
            </h2>
            <div className='buttonCont'>
                <div className='myButton'>
                  <Link href='/articles'>Perspectives & Insights</Link>
                </div>
              </div>   
          </div>
        </div>
      </div>
      <div className='secondPage'>
        <div>
          <div className='leftUpImage'>
            <TimeIsUpLeft/>
          </div>
        </div>
        <div className='textBox'>
          <div className={rajdhani.className}>
            <h1>
              Breaking the Paradigm.
            </h1>
            <h1>
              Discover a World Beyond Imagination
            </h1>
          </div>
          <p>
          In a world where prevailing ideologies pose a looming existential threat, our novel offers a thought-provoking departure. Journey with us as we explore captivating events in a fictional realm, providing a unique lens through which to examine pressing real-world issues.
          </p>
          <div className='buttonCont'>
            <div className='myButton'>
              <Link className={rajdhani.className} href='/paradigma'>Embark on an Epic Adventure</Link>
            </div>
          </div>
        </div>

      </div>
      <div className='charactersPage'>
        <div className='caractersAll'>
          <div className='castHeader'>
            <h1 className={rajdhani.className}>
              Meet the Faces Behind the Story
            </h1>
          </div>
          <div className='castBody' >
            <div className='castList'>
              <div className='character'>
                <div className='characterPhoto'>
                  <img src='https://almostanother.com/images/clio.webp' alt='Claudia Valeria Irreperta'/>
                </div>
                <div className='characterStory'>
                  <h1>
                  Claudia Valeria Irreperta
                  </h1>
                  <h2>
                    KR 
                  </h2>
                  <h2>
                  without some chairs and extra names.
                  </h2>

                  <p>
                  Claudia Valeria, fondly known as <strong>Clio</strong>, aged 22, is a prominent member of the esteemed Valeria gens in the Seventh Republic. Her family boasts a lineage of academic excellence, with her father currently serving as the head of the academy. Through generations, her ancestors have held influential positions such as consuls and cardinals, and their contributions to science have earned them recognition as saints.
                  </p><p>
                  Despite being born into this prestigious family, Claudia has always stood out as a trailblazer in her own right. Renowned as the most accomplished young scientist of her time, she possesses a brilliant mind and a passion for pushing boundaries. However, prior to the events chronicled in the novel, Claudia had purposefully chosen to distance herself from the realms of academia and public service.
                  </p><p>
                  Instead, she found solace in a life of leisure and indulgence, often becoming entangled in scandalous tales that circulated throughout the republic. Her rebellious behavior served as a form of protest against the existing societal norms and expectations, challenging the status quo at every turn.
                  </p>
                </div>

              </div>
              <div className='character'>
                <div className='characterPhoto'>
                  <img src='https://almostanother.com/images/fia.webp' alt='Aurelia Fabia Severina'/>
                </div>
                <div className='characterStory'>

                  <h1>
                  Aurelia Fabia Severina
                  </h1>
                  <h2>
                   KO
                  </h2>
                  <h2>
                  Assistant Prefect of National Security
                  </h2>
                  <p>
                  Aurelia Fabia, fondly known as <strong>Fia</strong>, aged 27, possesses a shrewd and purposeful nature, accompanied by unwavering honesty. Born into the illustrious lineage of one of the Republic&apos;s founding families, her ancestry holds a complex legacy. Despite the family&apos;s republican roots, two notable figures from their lineage have been regarded as the most formidable adversaries the Republic has ever faced.
                  </p><p>
                  The first, Titus Fabius Elder, held an unparalleled position of favor and influence in the court of the first emperor of the new era. Known for his unwavering loyalty to the emperor, Titus Fabius possessed the authority to act with impunity, his actions unconstrained by traditional boundaries.
                  </p><p>
                  The second, Titus&apos; grandson, known as Titus Fabius Cruentus, ascended to the throne as an emperor. His reign was marked by a reputation for tyranny and cruelty, leaving a dark imprint on the annals of history. Before the events chronicled in the novel, Fia harbored an ardent aspiration—to become the Republic&apos;s most exceptional and just consul, a feat that would redeem her family&apos;s tarnished reputation and restore honor to their name.
                  </p>
                </div>

              </div>
              <div className='character'>
                <div className='characterPhoto'>
                  <img src='https://almostanother.com/images/ace.webp' alt='Lucius Cornelius Perturbator'/>
                </div>
                <div className='characterStory'>
                  <h1>
                  Lucius Cornelius Perturbator
                  </h1>
                  <h2>
                    KR KO
                  </h2>
                  <h2>
                  His Brilliance Supreme Luminary of the Holy Academy&apos;s Prime Temple
                  </h2>
                  <p>
                  Lucius Cornelius, fondly known as <strong>Ace</strong>, aged 27, is not only a scion of the esteemed Cornelius gens but also a trailblazing figure in the realm of science and exploration. At the young age of 24, his groundbreaking scientific work titled &ldquo;The Bright Nature of Dark Matter&ldquo; sent shockwaves through the scientific community, redefining our understanding of the enigmatic substance. The revolutionary insights presented in his work earned him widespread acclaim and established him as a brilliant mind in the field.
                  </p><p>
                  Lucius undertook a daring scientific expedition to the treacherous North Pole at the age of 26. Faced with  the imminent danger to the lives of three expedition members, Lucius displayed exceptional leadership and resourcefulness. His quick thinking, unwavering determination, and selfless actions ensured the survival of his team, solidifying his reputation as a capable and heroic figure.
                  </p><p>
                  His unwavering dedication to the pursuit of knowledge and his unwavering commitment to the betterment of society have made him an influential and respected figure within the Republic.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className='buttonCont'>
            <div className='myButton'>
              <Link className={rajdhani.className} href='/characters'>Discover the Characters</Link>
            </div>
          </div>
        </div>
      
      </div>
      <div className='articlesPage'>
        <div className={rajdhani.className} >
          <div className='hBlock'>
            <div className='headTopBlock'>
              <h2>
                Time is up, but we have to try
              </h2>
              <h1>
              Seeking Solutions in Our Articles: <br/>Read, Comment, and Engage in the Process
              </h1>
            </div>  
            <div className='headlowBlock'>
              <h1>
                Perspectives & Insights:
              </h1>
              <h2>
                Articles on Contemporary Challenges
              </h2>
              <div className='buttonCont'>
                <div className='myButton'>
                  <Link href='/articles'>Explore Articles</Link>
                </div>
              </div>              
            </div>
          </div>
        </div>
        <div className='mainImage'>
          <img
            src='https://almostanother.com/images/time.webp' alt='Time is Up'
          />
        </div>

      </div>
    </main>
  )
}
