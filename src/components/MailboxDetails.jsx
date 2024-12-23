// src/pages/MailboxDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams(); // Access the mailboxId from the URL
  const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!mailbox) {
    return <p>Mailbox not found!</p>; // If no mailbox is found, display a not found message
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Boxholder Name:</strong> {mailbox.boxholderName}</p>
      <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
