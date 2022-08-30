import './App.scss';
import Card from './components/cards/Cards';
import Title from './components/title/Title';
import iconCalcul from "./assets/icon-calculator.svg";
import iconKarma from "./assets/icon-karma.svg";
import iconSupervisor from "./assets/icon-supervisor.svg"
import iconTeamBuilder from "./assets/icon-team-builder.svg"

function App() {
  return (
    <div className="App">
      <header>
      <Title/>
      </header>
      <main>
      <Card title='supervisor' textContent='Monitors activity to identify project roadblocks ' iconSource={iconSupervisor}/>
      <Card title='team builder' textContent=' Scans our talent network to create the optimal team for your project' iconSource={iconTeamBuilder}/>
      <Card title='Karma' textContent='Regularly evaluates our talent to ensure quality' iconSource={iconKarma}/>
      <Card title='calulator' textContent='Uses data from past projects to provide better delivery estimates' iconSource={iconCalcul}/>
      </main>
      <footer className='footer'>
       <p>
       Challenge by Frontend Mentor. Coded by Amandine Carreno.
       </p>
      </footer>
    </div>
  );
}

export default App;
