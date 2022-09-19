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
        <Title />
      </header>
      <main className='main_container'>
        <Card title='supervisor' borderColor="bt_light_blue" textContent='Monitors activity to identify project roadblocks ' iconSource={iconSupervisor} />
        <div className='desktop_card_position'>
          <Card title='team builder' borderColor="bt_red" textContent=' Scans our talent network to create the optimal team for your project' iconSource={iconTeamBuilder} />
          <Card title='Karma' borderColor="bt_orange" textContent='Regularly evaluates our talent to ensure quality' iconSource={iconKarma} />
        </div>
        <Card title='calulator' borderColor="bt_blue" textContent='Uses data from past projects to provide better delivery estimates' iconSource={iconCalcul} />
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
