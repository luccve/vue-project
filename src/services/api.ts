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
