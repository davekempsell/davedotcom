
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction';
import MoreInfo from '../components/MoreInfo';
import Experience from "../components/Experience";
import Projects from '../components/Projects';
import Footer from '../components/Footer';
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
        {Footer()}
      </div>
    </div>
  )
}

export default Home;