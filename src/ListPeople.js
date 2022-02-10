import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";
import Edit from "./Edit";

export const ListPeople = () => {
  const [people, setPeople] = useState(data);
  const [editUser, setEditUser] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const deleteUser = (id) => {
    const newUsers = people.filter((user) => user.id !== id);
    setPeople(newUsers);
  };

  const EditData = (id) => {
    const editUser = people.filter((user) => {
      return user.id === id;
    });
    setisEdit(true);
    setEditId(id);
    setEditUser(editUser);
  };

  const editPerson = (newName, newRole) => {
    setPeople(
      people.map((item) => {
        if (item.id === editId) {
          return { ...item, name: newName, role: newRole };
        }
        return item;
      })
    );
  };

  return (
    <main>
      <form action="">
        <section className="form-container-top ">
          <span>Users</span>
        </section>

        <section className="form-container-mid ">
          <ul className="flexjustify">
            <li>email</li>
            <li>name</li>
            <li>role</li>
            <li></li>
          </ul>

          <List data={people} deleteUser={deleteUser} EditData={EditData} />
        </section>
      </form>
      <section className="form-bot-edit">
        {isEdit && (
          <Edit
            editUser={editUser}
            editPerson={editPerson}
            setisEdit={setisEdit}
          />
        )}
      </section>
    </main>
  );
};
