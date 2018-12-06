import Link from 'next/link';
import { Col, Card, Icon } from 'antd';
const { Meta } = Card;

const Text = ({ text }) => <span style={{ color: '#2e2e2e' }}>{text}</span>;

export default ({ id, name, subtitle, price, photoUrl }) => (
  <div style={{ marginBottom: '25px' }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="example" src={photoUrl} />}
        >
          <Meta title={name} description={<Text text={subtitle} />} />
        </Card>
      </a>
    </Link>
  </div>
);
