import UserCard from "./components/UserCard";

export default function App() {
  const users = [
    { name: "Айгерим", email: "aigerim@example.com" },
    { name: "Бекзат", email: "bekzat@example.com" },
    { name: "Данияр", email: "daniyar@example.com" },
    { name: "Салтанат", email: "saltanat@example.com" },
  ];

  return (
    <div className="app">
      <h1>Список пользователей</h1>
      <div className="user-list">
        {users.map((u, i) => (
          <UserCard key={i} name={u.name} email={u.email} />
        ))}
      </div>
    </div>
  );
}
