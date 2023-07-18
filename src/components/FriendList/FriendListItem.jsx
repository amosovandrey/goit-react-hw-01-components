import PropTypes from 'prop-types';
import { Item, Status, Avatar, FriendName } from './FriendList.styled';

export const FriendListItem = friend => {
  return (
    <Item>
      <Status
        style={{ backgroundColor: `${friend.isOnline ? 'green' : 'red'}` }}
      />
      <Avatar src={friend.avatar} alt="User avatar" width="48" />
      <FriendName>{friend.name}</FriendName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
