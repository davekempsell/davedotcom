import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import { Projects } from './components/Projects';

function App() {
  const [projectStatus, setProjectStatus] = useState(true)

  function showProjects() {
    if(projectStatus) {
      return (
        Projects()
      )
    }
  }

  return (
    <div className="app">
      <Header></Header>
      {showProjects()}
    </div>
  );
}

export default App;
