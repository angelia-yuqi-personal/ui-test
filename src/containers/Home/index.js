import logo from "../../logo.svg";
import menu from "../../images/menu.svg";
import LanguageSelect from "./LanguageSelect";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Input from "../../components/Input";

function Home() {
  return (
    <div className="w-95 h-160">
      <div className="w-full h-13 bg-brand-blue py-2.5 pl-3 pr-4 flex justify-between items-center">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <LanguageSelect />
        <img src={menu} className="w-6 h6" alt="menu" />
      </div>

      <img src={logo} className="App-logo" alt="logo" />
      <Button onClick={(e) => console.log("click")}>Sign up</Button>
      <Tag
        onClick={(e) => console.log("click")}
        onClose={(e) => console.log("close")}
        variant="line"
        closable
        className="my-1"
      >
        Sign up
      </Tag>
      <div className="bg-brand-blue-4 w-full h-20 pt-2 px-2">
        <Input errorMessage="aaaaa" placeholder="please enter" />
      </div>
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
