import { Layout, Col, Row } from "antd";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { styles } from "./styles";
import Nav from "./components/nav";

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  return (
    <Header style={styles.header}>
      <Row className="Row">
        <Col className="span" span={4}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </Col>
        <Col className="span" span={5}>
          <p>پنل مدیریت فروشگاه</p>
        </Col>
        <Col className="span" span={10}>
          <Nav />
        </Col>
        <Col className="span" span={5}>
          <NavLink to="/">بازگشت به سایت</NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default AdminHeader;
