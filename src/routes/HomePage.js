
import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction';
import MoreInfo from '../components/MoreInfo';
import Experience from "../components/Experience";
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import '../App.css';
import HomePageHeader from '../components/HomePageHeader';

export function Home() {
  return (
    <div className="new-home-container">
      {HomePageHeader()}
      {Introduction()}
      {MoreInfo()}
      {Experience()}
      {Projects()}
      {Footer()}
    </div>
  )
}

export default Home;