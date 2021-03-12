import Select from "../../components/Select";
const Option = Select.Option;

function LanguageSelect({ onChange }) {
  return (
    <Select className="rounded-full">
      <Option value="0">Conflux Tethy</Option>
      <Option value="1">Testnet</Option>
    </Select>
  );
}

export default LanguageSelect;
