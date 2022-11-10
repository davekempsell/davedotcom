import React, { useState } from 'react';
import { LexiconProject } from "./Projects/LexiconProject";
import { GmsProject } from "./Projects/GmsProject";
import { LoyalBeanProject } from './Projects/LoyalBean'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  let children = 3

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = children - 1;
    } else if (newIndex >= children) {
      newIndex = 0;
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {LexiconProject(activeIndex, updateIndex)}
        {LoyalBeanProject(activeIndex, updateIndex)}
        {GmsProject(activeIndex, updateIndex)}
      </div>
    </div>
  );
}