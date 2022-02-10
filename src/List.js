import React from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const List = ({ data, deleteUser, EditData }) => {
  return (
    <>
      {data.map((item) => {
        const { id, name, email, role } = item;
        return (
          <lu key={id} className="flexjustify lisection">
            <li>{email}</li>
            <li>{name}</li>
            <li>{role}</li>
            <li>
              <button
                type="button"
                onClick={() => {
                  EditData(id);
                }}
              >
                <AiFillEdit />
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteUser(id);
                }}
              >
                <AiOutlineDelete />
              </button>
            </li>
          </lu>
        );
      })}
    </>
  );
};

export default List;
