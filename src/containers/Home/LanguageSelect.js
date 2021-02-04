import Select from "../../components/Select";
const Option = Select.Option;

function LanguageSelect({ onChange }) {
  return (
    <Select className="w-30.5 h-7 text-white border border-white rounded-full">
      <Option value="0">Conflux Tethy</Option>
      <Option value="1">Testnet</Option>
    </Select>
  );
}

export default LanguageSelect;
