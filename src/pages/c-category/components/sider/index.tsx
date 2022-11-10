import { Anchor, Button, Col, Divider, Row, Typography } from "antd";

const { Title } = Typography;
const { Link } = Anchor;

const Sidebar = () => {
  return (
    <Col>
      <Title level={2}>سبد خرید</Title>
      <Title level={5}>تعداد</Title>
      <Title level={4}>جمع سبد خرید </Title>
      <Divider />
      <Row>
        <Button>مشاهده سبد خرید</Button>
        <Button>ثبت سفارش</Button>
      </Row>
      <Divider />
      <Typography.Title level={2}>دسته بندی</Typography.Title>
      <Anchor>
        <Link href="#" title="قهوه ترک" />
        <Link href="#" title="قهوه دمی و اسپرسو" />
        <Link href="#" title="لوازم جانبی" />
        <Link href="#" title="قهوه فوری و شکلات" />
      </Anchor>
    </Col>
  );
};

export default Sidebar;
