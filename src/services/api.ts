export async function apiCNPJ(cnpj: string) {
  const data = await fetch(`http://127.0.0.1:5000/cnpj?cnpj=${cnpj}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const object = await data.json();
  return object;
}
