export function ChatDiscussionsContact({ contacts }) {
  function concatContactName(contact, index) {
    const isLastElement = index === contacts.length - 1;

    return isLastElement ? contact.name : `${contact.name}, `;
  }

  return <div>{contacts.map((contact) => contact.name).join(", ")}</div>;
}
