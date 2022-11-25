
import NavBar from './NavBar';
import Introduction from './Introduction';
import MoreInfo from './MoreInfo';
import Experience from "./Experience";
import Projects from './Projects';
import Footer from './Footer';
import AboutMe from './AboutPage';
import '../App.css';

export function Home() {
  return (
    <div className="home-container">
      {NavBar()}
      <div className="main-content-container">
        {Introduction()}
        {MoreInfo()}
        {Experience()}
        {Projects()}
        {AboutMe()}
        {Footer()}
      </div>
    </div>
  )
}

export default Home;