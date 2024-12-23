import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

const NewMailbox = ({ mailboxes, setMailboxes }) => {
const [boxholderName, setBoxholderName] = useState('');
const [boxSize, setBoxSize] = useState('Small')
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();

    const newId = mailboxes.length + 1;

    const newMailbox = {
        _id: newId,
        boxholderName,
        boxSize,
    };

    setMailboxes([...mailboxes, newMailbox]);

    navigate('/mailboxes');

}
      return (
    <div>
      <h2>Create New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter a Boxholder Name:
            <input
              type="text"
              value={boxholderName}
              onChange={(e) => setBoxholderName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Select a Box Size:
            <select
              value={boxSize}
              onChange={(e) => setBoxSize(e.target.value)}
              required
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewMailbox;