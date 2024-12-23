import React from 'react';
import { Link } from 'react-router-dom';

const Mailboxes = ({ mailboxes }) => {
    return (
        <div>
          <h2>Mailboxes</h2>
          <div className="mailbox-container">
            {mailboxes.map((mailbox) => (
              <div key={mailbox._id} className="mailbox">
                
                <Link to={`/mailboxes/${mailbox._id}`}>
                  <p>Mailbox {mailbox._id}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    };
  
  export default Mailboxes;