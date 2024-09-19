export default function Card({ card, onDelete }) {
  return (
    <>
      <div>{card.name}</div>
      <button onClick={() => onDelete(card.id)}>delete</button>
    </>
  );
}
