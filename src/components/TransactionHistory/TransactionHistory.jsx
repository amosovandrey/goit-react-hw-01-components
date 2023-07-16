import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableRowItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableHeaderItem>Type</TableHeaderItem>
          <TableHeaderItem>Amount</TableHeaderItem>
          <TableHeaderItem>Currency</TableHeaderItem>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <TableRow key={id}>
      <TableRowItem>{type}</TableRowItem>
      <TableRowItem>{amount}</TableRowItem>
      <TableRowItem>{currency}</TableRowItem>
    </TableRow>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
