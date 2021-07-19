import User from "./User";

const users = [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Eva",
        "last": "Myers"
      },
      "email": "eva.myers@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Philip",
        "last": "Gill"
      },
      "email": "philip.gill@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
      }
    }
  ]

export default function UserList(props) {

  // https://randomuser.me/api/?inc=email,gender,name,picture&results=10
  const userListItems = users.map(u=>{
    return UserListItem(user => u);
  })
  <ul>
    {userListItems}
  </ul>
}

function UserListItem(props) {
  <li>{props.user.name.first}</li>;
}

export default UserList;
