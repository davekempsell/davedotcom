import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'
import { LexiconProject } from "./Projects/LexiconProject";
import { GmsProject } from "./Projects/GmsProject";
import { LoyalBeanProject } from './Projects/LoyalBeanProject'
import { TastebookProject } from './Projects/TastebookProject'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  let children = ['lexicon', 'loyal bean', 'gms calculator', 'tastebook']

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = children.length - 1;
    } else if (newIndex >= children.length) {
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
        {LexiconProject(activeIndex, updateIndex, children)}
        {LoyalBeanProject(activeIndex, updateIndex, children)}
        {GmsProject(activeIndex, updateIndex, children)}
        {TastebookProject(activeIndex, updateIndex, children)}
      </div>
    </div>
  );
}