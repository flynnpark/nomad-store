import Link from 'next/link';
import { Col, Card, Icon } from 'antd';
const { Meta } = Card;

export default ({ id, name, subtitle, price, photoUrl }) => (
  <Col span={4} style={{ marginBottom: '25px' }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="example" src={photoUrl} height="200px" />}
        >
          <Meta title={name} description={subtitle} />
        </Card>
      </a>
    </Link>
  </Col>
);
