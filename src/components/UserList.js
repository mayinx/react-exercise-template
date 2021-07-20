import User from "./User";
import { useEffect, useState } from "react";

export default function UserList(props) {
  const [users, setCharacters] = useState([]);
  const [listLimit, setlistLimit] = useState(10);
  const [genderFilter, setGenderFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const apiUrl = `https://randomuser.me/api/?inc=email,gender,name,picture&gender=${genderFilter}&results=${listLimit}`;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(false);
      });
  }, [apiUrl]);

  // https://randomuser.me/users/?inc=email,gender,name,picture&results=10
  const userListItems = users.map((u, index) => {
    return <UserListItem key={index} user={u} />;
  });
  return (
    <ul className="UserList">
      <UserListHeader
        listLimit={listLimit}
        onListLimitChange={(e) => {
          setlistLimit(e.target.value);
        }}
        onListGenderFilterChange={(e) => {
          setGenderFilter(e.target.value);
        }}
      />
      {userListItems}
    </ul>
  );
}

function UserListItem(props) {
  return (
    <li className="UserListItem">
      <User user={props.user} />
    </li>
  );
}

function UserListHeader(props) {
  return (
    <li className="UserListHeader">
      <div>
        <label>List Limit</label>
        <input
          type="number"
          onChange={props.onListLimitChange}
          value={props.listLimit}
        ></input>
      </div>
      <select onChange={props.onListGenderFilterChange}>
        <option value="all">All Genders</option>
        <option value="male">Male only</option>
        <option value="female">Female only</option>
      </select>
    </li>
  );
}
