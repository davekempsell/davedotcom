import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'

import { LexiconProject } from "./Projects/LexiconProject";
import { GmsProject } from "./Projects/GmsProject";
import { LoyalBeanProject } from './Projects/LoyalBeanProject'
import { TastebookProject } from './Projects/TastebookProject'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  let projects = ['lexicon', 'loyal bean', 'gms calculator', 'tastebook']

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })


  return (
    <div {...handlers} className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {LexiconProject(activeIndex, updateIndex, projects)}
        {LoyalBeanProject(activeIndex, updateIndex, projects)}
        {GmsProject(activeIndex, updateIndex, projects)}
        {TastebookProject(activeIndex, updateIndex, projects)}
      </div>
    </div>
  );
}

export default Projects