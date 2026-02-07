import './Message.css';

function Message({ message }) {
  const { text, type, timestamp } = message;
  
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`message ${type}-message`}>
      <div className="message-header">
        <strong>{type === 'user' ? 'You' : 'Think Ahead'}</strong>
        <span className="message-time">{formatTime(timestamp)}</span>
      </div>
      <div className="message-text">{text}</div>
    </div>
  );
}

export default Message;
