import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const suffix = <SearchOutlined style={{ fontSize: 16 }} />;

const SearchBar: React.FC = () => {
  return <Input allowClear placeholder="جستجو" size="large" prefix={suffix} />;
};

export default SearchBar;
