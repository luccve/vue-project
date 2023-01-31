import { user, transaction, _id, emailType } from "../../types";

export async function apiCNPJ(cnpj: string) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/cnpj?cnpj=${cnpj}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const object = await data.json();
  return object;
}

export async function insertUser(body: user) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/user`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const object = await data.json();
  return object;
}

export async function transaction(body: transaction) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/transaction`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const object = await data.json();
  return object;
}

export async function removeTransaction(_id: _id | any) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/changeTransaction`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_id),
    }
  );
  const object = await data.json();
  return object;
}

export async function editTransaction(_id: _id | any) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/changeTransaction`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_id),
    }
  );
  const object = await data.json();
  return object;
}

export async function getAllTransaction(uid: string | undefined) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/getTransaction?uid=${uid}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const object = await data.json();
  return object;
}

export async function getUser(uid: string | undefined) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/getUser?uid=${uid}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const object = await data.json();
  return object;
}

export async function putUser(body: any) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/user`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const object = await data.json();
  return object;
}

export async function predictAprove(
  incoming: number,
  age: number,
  loan: number
) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_PERSISTENCIA}/predict?income=${incoming}&age=${age}&loan=${loan}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const object = await data.json();
  return object;
}

export async function email(body: emailType) {
  const data = await fetch(
    `${process.env.VUE_APP_HOST_VERTICE_BACK_END}/email`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const object = await data.json();
  return object;
}
