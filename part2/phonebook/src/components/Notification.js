const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  return (
    <div
      className="notification"
      style={notification.isError ? { color: "red" } : { color: "green" }}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
