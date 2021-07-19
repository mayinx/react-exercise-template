// - It should render the full name of the user, including the title
// - It should change its background depending on the gender
// - It should render the picture of the user
export default function User(props) {
  return (
    <div className={`User User--${props.user.gender}`}>
      <img src={props.user.picture.medium} alt="Jaja" />
      <span>
        {props.user.name.title} {props.user.name.first} {props.user.name.last}
      </span>
    </div>
  );
}
