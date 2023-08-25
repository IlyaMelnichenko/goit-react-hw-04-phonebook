import { RemoveButton } from "./StyledPhoneItem";


export const PhoneItem = ({ deleteContact, contact }) => {
  return (
    <><div>
      {contact.Name}:{contact.Number}
      </div>
      <RemoveButton 
        value={contact.id}
        onClick={evt => deleteContact(evt.target.value)}
      >
        toDelete
      </RemoveButton>
    </>
  );
};
