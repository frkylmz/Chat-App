import styles from "./styles.module.css";

function ChatItem({ item }) {
  return (
    <div className={`${styles.ChatItem} ${item.fromMe ? styles.right : ""}`}>
      {item.message}
    </div>
  );
}

export default ChatItem;
