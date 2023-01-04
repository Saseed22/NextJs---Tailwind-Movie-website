"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const RootLayout = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((d) => setUsers(d.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto ">
      <main>{children}</main>
      <aside className="w-[20rem] text-white bg-green-600 p-4 mt-2 rounded-lg flex flex-col gap-4">
        {users.map((u, i) => (
          <Link href={"/actors"} key={i} className="p-2 rounded-md bg-yellow-900">
            {u.name}
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default RootLayout;
