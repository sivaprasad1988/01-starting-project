export default function ({ children, onSelect, isSelectedTopic }) {
  console.log("TabButton component executing");
  return (
    <li>
      <button className={isSelectedTopic ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
