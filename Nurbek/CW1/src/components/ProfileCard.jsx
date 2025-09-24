import "./ProfileCard.css";

export default function ProfileCard({ name, email, avatar }) {
  return (
    <article className="profile-card" id="home">
      <img className="profile-card__avatar" src={avatar} alt={name} />
      <div className="profile-card__body">
        <h3 className="profile-card__name">{name}</h3>
        <p className="profile-card__email">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </article>
  );
}
