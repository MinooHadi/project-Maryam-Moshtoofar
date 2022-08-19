import { Layout, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import Nav from "./components/nav";
import Logo from "../../assets/images/logo.png";
import Icons from "./components/Icons";
import SearchBar from "./components/SearchBar";


const { Header } = Layout;

const UserHeader: React.FC = () => {
  return (
    <Header className="userHeader">
      <Row className="Row">
        <Col className="span" span={4}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </Col>
        <Col className="span" span={5}>
          <SearchBar />
        </Col>
        <Col className="span" span={10}>
          <Nav />
        </Col>
        <Col className="span" span={5}>
          <Icons />
        </Col>
      </Row>
    </Header>
  );
};

export default UserHeader;
