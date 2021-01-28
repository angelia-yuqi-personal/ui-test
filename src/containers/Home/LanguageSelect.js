import Select from "../../components/Select";

const data = [
  { text: "Conflux Tethy", value: "0" },
  { text: "Testnet", value: "1" },
];

function LanguageSelect({ onChange }) {
  return (
    <Select
      className="w-30.5 h-7 text-white border border-white px-4 hover:border-blue-300  rounded-full"
      options={data}
    />
  );
}

export default LanguageSelect;