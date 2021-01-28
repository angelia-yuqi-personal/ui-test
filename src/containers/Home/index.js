import logo from '../../logo.svg';
import menu from '../../images/menu.svg'
import LanguageSelect from './LanguageSelect'

function Home() {
  return (
    <div className="w-95 h-160">
      <div className="w-full h-13 bg-theme-blue py-2.5 pl-3 pr-4 flex justify-between items-center">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <LanguageSelect />
        <img src={menu} className="w-6 h6" alt="menu" />
      </div>

      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
      <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
        Sign up
      </button>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Home;
