import React, { useState } from "react";
import logo from "../../logo.svg";
import close from "../../images/brand-close.svg";
import success from "../../images/success.svg";
import info from "../../images/info.svg";
import menu from "../../images/menu.svg";
import LanguageSelect from "./LanguageSelect";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Input from "../../components/Input";
import Notification from "../../components/Notification";
import Toast from "../../components/Toast";
import Alert from "../../components/Alert";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-95 h-160">
      <div className="w-full h-13 bg-brand-blue py-2.5 pl-3 pr-4 flex justify-between items-center">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <LanguageSelect />
        <img src={menu} className="w-6 h6" alt="menu" />
      </div>

      <img src={logo} className="App-logo" alt="logo" />
      <Button onClick={(e) => setOpen(true)} color="secondary" size="medium">
        Open
      </Button>
      <Button disabled width="w-70">
        Disabled
      </Button>
      <Tag closable className="my-1">
        Large
      </Tag>
      <Tag
        color="brand-blue-10"
        size="small"
        className="text-brand-blue my-1"
        closable
        closeIcon={close}
      >
        Small
      </Tag>
      <Tag size="medium" closable color="secondary">
        Medium
      </Tag>
      <Tag size="small" color="success">
        Abcde
      </Tag>
      <div className="bg-brand-blue-4 w-full h-20 pt-2 px-2">
        <Input errorMessage="aaaaa" placeholder="please enter" />
      </div>
      <Toast
        open={false}
        icon={success}
        title="a"
        content="This is a success message"
        onClose={() => setOpen(false)}
      />
      <Alert
        open={open}
        icon={info}
        onClose={() => setOpen(false)}
        closable
        content="This is a success message"
      />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Notification
        open={false}
        title="Tips"
        onClose={() => setOpen(false)}
        content="Get incoming transactions Third party APIs are used to show your incoming transactions in the history. Turn off if you don’t want us to pull data from those services."
        actions={
          <Button className="mt-2" width='w-48' onClick={() => setOpen(false)}>
            Get
          </Button>
        }
      />
    </div>
  );
}

export default Home;
