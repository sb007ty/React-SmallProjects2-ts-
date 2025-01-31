import React, { useState } from "react";
import users from "./users";
import "./styles.css";
import { User } from "./userDb.type";

function UserDb() {
  const [search, setSearch] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initialUsers, setInitialUsers] = useState(users);
  const [userData, setUserData] = useState(users);
  const [selectedUserId, setSelectedUserId] = useState("");
  return (
    <div className="user-db">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            // console.log(object);
            const val = e.target.value;
            setSearch(val);
            if (val.trim() === "") {
              setUserData(initialUsers);
              return;
            }
            const newUsers = initialUsers.filter(
              (item) =>
                item.firstName.toLowerCase().includes(val.toLowerCase()) ||
                item.lastName.toLowerCase().includes(val.toLowerCase())
            );
            setUserData(newUsers);
          }}
        />
      </div>

      <div className="user-details">
        <div className="user-options">
          <select
            // multiple
            value={selectedUserId}
            size={5}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const selUser = e.target.value;
              setSelectedUserId(selUser);
              const user = userData.find((item) => item.id === selUser);
              if (user) {
                const { firstName, lastName } = user;
                setFirstName(firstName);
                setLastName(lastName);
              }
            }}
          >
            <>
              <option value={""} disabled hidden></option>
              {userData.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                  >{`${item.firstName} ${item.lastName}`}</option>
                );
              })}
            </>
          </select>
        </div>
        <div className="user-names">
          <div>First Name</div>
          <input
            type="text"
            name="firstname"
            id=""
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <div>Last Name</div>
          <input
            type="text"
            name="lastname"
            id=""
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="btns">
        <button
          disabled={selectedUserId !== ""}
          onClick={() => {
            const newUsers = [
              ...initialUsers,
              { id: crypto.randomUUID(), firstName, lastName },
            ];
            setInitialUsers(newUsers);
            setUserData(newUsers);
          }}
        >
          Create
        </button>
        <button
          disabled={selectedUserId === ""}
          onClick={() => {
            const newUsers = initialUsers.map((item) => {
              if (item.id === selectedUserId)
                return {
                  ...item,
                  firstName,
                  lastName,
                };
              return item;
            });
            setUserData(newUsers);
            setInitialUsers(newUsers);
          }}
        >
          Update
        </button>
        <button
          disabled={selectedUserId === ""}
          onClick={() => {
            const newUsers = initialUsers.filter((item) => {
              if (item.id === selectedUserId) return false;
              return true;
            });
            setUserData(newUsers);
            setInitialUsers(newUsers);
            setSelectedUserId("");
          }}
        >
          Delete
        </button>
        <button
          disabled={selectedUserId === ""}
          onClick={() => {
            setSelectedUserId("");
            setFirstName("");
            setLastName("");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UserDb;
