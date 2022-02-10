import React, { useEffect, useState } from "react";

const Edit = ({ editUser, editPerson, setisEdit }) => {
  const { email, name, role } = editUser[0];

  const [newName, setNewName] = useState("name");
  const [newRole, setNewRole] = useState("role");

  useEffect(() => {
    setNewName(name);
    setNewRole(role);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editPerson(newName, newRole);
    setNewName("");
    setNewRole("");
    setisEdit(false);
  };

  const onChangeValue = (e) => {
    setNewRole(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <article className="top-information">
        <h2>{email}</h2> <button type="submit">Save</button>
      </article>
      <div className="top-mid-edit">
        <article>
          <p>New Name</p>
          <input
            placeholder="New Name"
            type="text"
            name={newName}
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </article>
        <section>
          <p>New Role</p>
          <div onChange={onChangeValue} className="radiolist">
            <input
              type="radio"
              value="Developer"
              name="roles"
              checked={newRole.toUpperCase() === "DEVELOPER" && true}
              onChange={(e) => {
                onChangeValue(e);
              }}
            />
            Developer
            <br />
            <input
              type="radio"
              value="Admin"
              name="roles"
              checked={newRole.toUpperCase() === "ADMIN" && true}
              onChange={(e) => {
                onChangeValue(e);
              }}
            />
            Admin <br />
            <input
              type="radio"
              value="App Manager"
              name="roles"
              checked={newRole.toUpperCase() === "APP MANAGER" && true}
              onChange={(e) => {
                onChangeValue(e);
              }}
            />
            App Manager
            <br />
            <input
              type="radio"
              value="Marketing"
              name="roles"
              checked={newRole.toUpperCase() === "MARKETING" && true}
              onChange={(e) => {
                onChangeValue(e);
              }}
            />
            Marketing
            <br />
            <input
              type="radio"
              value="Sales"
              name="roles"
              checked={newRole.toUpperCase() === "SALES" && true}
              onChange={(e) => {
                onChangeValue(e);
              }}
            />
            Sales <br />
          </div>
        </section>
      </div>
    </form>
  );
};

export default Edit;
