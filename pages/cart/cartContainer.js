import { Query } from 'react-apollo';
import CartPresenter from './cartPresenter';
import { CART_QUERY } from './cartQueries';

const supportedCards = [
  {
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: ['visa', 'mastercard', 'unionpay'],
      supportedTypes: ['debit', 'credit']
    }
  }
];

export default class extends React.Component {
  render() {
    return (
      <Query query={CART_QUERY}>
        {({ data }) => {
          this.cartInfo = data;
          return <CartPresenter data={data} onPay={this._onPay} />;
        }}
      </Query>
    );
  }

  _onPay = () => {
    const displayItems = this.cartInfo.cart.map(product => {
      return {
        label: product.name,
        amount: {
          currency: 'USD',
          value: product.price
        }
      };
    });
    const total = this.cartInfo.cart.reduce(
      (price, product) => price + product.price,
      0
    );
    const paymentRequest = new PaymentRequest(supportedCards, {
      displayItems,
      total: {
        label: 'Total Price',
        amount: { currency: 'USD', value: total }
      }
    });
    paymentRequest
      .show()
      .then(json => console.log(json))
      .catch(() => console.log('Payment Cancelled'));
  };
}
