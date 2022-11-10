import { Layout, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import Nav from "./components/c-nav";
import Logo from "../../assets/images/logo.png";
import Icons from "./components/c-icons";

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
        <Col className="span" span={15}>
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
