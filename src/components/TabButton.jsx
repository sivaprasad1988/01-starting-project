export default function ({ children, onSelect }) {
  console.log("TabButton component executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
