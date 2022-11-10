import { LexiconProject } from "./Projects/LexiconProject";
import { GmsProject } from "./Projects/GmsProject";

export function Projects() {
  return (
    <div>
      {LexiconProject()}
      {GmsProject()}
    </div>
  );
}