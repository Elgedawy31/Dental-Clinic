"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

function Login() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setuser] = useState(null);


  type Data = {
    username: string;
    password: string;
  };

  async function handleFunc(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const data: Data = {
      username: username,
      password: password,
    };

    try {
      const myUser = await axios.post("http://localhost:4000/user/signin", data);

    localStorage.setItem("user", JSON.stringify(myUser.data));

    setuser(myUser.data)
    } catch (error) {
      console.log(error)
    }
  }


  localStorage.getItem('user')

  return (
    <div className="container mt-52 m-auto">
      <form onSubmit={handleFunc}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-success ">
          Submit
        </button>
      </form>

      <div style={{ display: "block", width: "300px", margin: "30px auto" }}>
        {" "}
        You dont have any email ? <a href="/register">register</a>
      </div>

        {user !== null && <Link href='/'><button className="btn btn-success">To Home</button></Link>}

    </div>
  );
}

export default Login;
