import { PhoneItem } from '../Phoneitem/PhoneItem';
import { StyledItem, StyledList } from './StyledPhoneList';

export const PhoneList = ({ deleteContact, contacts }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <StyledItem key={contact.id}>
          <PhoneItem contact={contact} deleteContact={deleteContact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
