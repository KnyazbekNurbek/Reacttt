import Button from "./Button";
import "./UserCard.css";

export default function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <Button text="Подробнее" />
    </div>
  );
}
