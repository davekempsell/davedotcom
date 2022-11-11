import { ProjectDots } from "./ProjectDots"
import { ProjectTitle } from "./ProjectTitle"

export function LexiconProject(activeIndex, updateIndex, children) {

  return (
    <div className="project-container">
      {ProjectTitle('LEXICON', activeIndex, updateIndex)}
      <div className="project-content">
        <div className='images'>
        <div className="project-image" style={{ backgroundImage: `url(/images/lexicon-hardmode.gif)`}}></div>
        </div>
        {ProjectDots(activeIndex, children)}
        <div className='description'>
          <div className="project-description">
            <p>Lexicon was built in October 2022 as an independent project to develop a single page React app. It is based on the popular New York Times word game, Wordle.</p>
            <p>The idea behind it was to update the rules on 'hard mode' to make the game more difficult. The original version of the game still allows you to use letters that have been revealed to not be in the word. Lexicon changes that, as well as updated logic to prevent a letter being used in a place the player knows it not to be.</p>
            <p>Lexicon was built in React, using NodeJS with a simple Express server hosted through Heroku.</p>
          </div>
          <a href="https://lexicon-by-dave.herokuapp.com/"  target="_blank" rel="noreferrer">
            <img src="/images/lexicon-icon-white.png" alt="lexicon logo"/>
            <p>Play Lexicon!</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LexiconProject