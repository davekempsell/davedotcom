import Filler from './Filler';
import NavBar from './NavBar';
import Introduction from './Introduction';
import MoreInfo from './MoreInfo';
import Experience from "./Experience";
import Projects from './Projects';

export function Home() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        {Introduction()}
        {MoreInfo()}
        {Experience()}
        {Projects()}
      </div>
      {Filler()}
    </div>
  )
}

export default Home;