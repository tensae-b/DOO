import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/invite-user")({
  component: () => <InviteNewUser />,
});

import {
  getAllUser,
  verifyUser,
  useCreateNewUser,
  filterUsers,
} from "../services/queries/userQuery";

function InviteNewUser() {
  const userData: any = [];
  const [user, setUser] = useState([]);
  const [useFiltered, setFiltered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("role");
  const [filtered, setFilter] = useState({
    category: "",
    value: "",
  });
  const emailList: any = [];

  // const { data, isLoading } = getAllUser();
  const { mutateAsync: verify }: any = verifyUser();
  const { mutateAsync: createUser, isError } = useCreateNewUser();
  const { mutateAsync: filter }: any = filterUsers();
  // function fetchData() {
  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error fetching users</div>;
  //   console.log(data[0]);

  //   for (let i = 0; i < data.length; i++) {
  //     userData.push({
  //       id: data[i].id,
  //       email: data[i].email,
  //       role: data[i].role,
  //     });
  //     setUser(userData);
  //   }
  // }

  async function verifying() {
    for (let i = 0; i < emailList.length; i++) {
      let email = emailList[i].email;
      let role = emailList[i].role;
      console.log(email, role);
      const random = Math.random() * 100;
      const password = email.substring(0, 2) + Math.floor(random);

      const res = await verify({ email, password });

      console.log(res);
      if (res == "success") {
        console.log({ email, password, role });
        const userData = await createUser({ email, password, role });

        console.log({ userData });
      }
    }
  }

  function handleChange(event: any) {
    if (event.target.name == "search") {
      setFilter((prevState) => ({
        ...prevState,
        value: event.target.value,
      }));
    } else {
      setSelectedOption(event.target.value);
      setFilter((prevState) => ({
        ...prevState,
        category: event.target.value,
      }));
    }
  }
  function checked(email: string, role: string, event: any) {
    console.log(event.target.value);
    emailList.push({
      email: email,
      role: role,
    });

    console.log(emailList);
  }

  async function handelSubmit() {
    const data = await filter(filtered);

    for (let i = 0; i < data.length; i++) {
      userData.push({
        id: data[i].id,
        email: data[i].email,
        role: data[i].role,
      });
      setUser(userData);
    }
    console.log(data);
  }
  return (
    <div>
      <div className="flex">
        <input
          type="text "
          placeholder="typehere"
          name="search"
          onChange={handleChange}
          required
        />
        <div>
          <label htmlFor="role"> role</label>
          <input
            type="radio"
            value="role"
            name="role"
            checked={selectedOption === "role"}
            onChange={handleChange}
          />
          <label htmlFor="email"> email</label>
          <input
            type="radio"
            value="email"
            name="email"
            checked={selectedOption === "email"}
            onChange={handleChange}
          />
        </div>
        <button onClick={handelSubmit}> filter</button>
      </div>

      <div className="mt-32 mx-10 flex flex-col gap-10">
        {user.map((item: any) => (
          <div className="flex gap-10">
            <h1>{item.email}</h1>
            <p>{item.role}</p>
            <input
              type="checkbox"
              onChange={() => {
                checked(item.email, item.role);
              }}
            />

            <br />
          </div>
        ))}
        <button
          className="bg-black text-white p-5"
          onClick={() => {
            verifying();
          }}
        >
          {" "}
          invite
        </button>
      </div>
    </div>
  );
}
