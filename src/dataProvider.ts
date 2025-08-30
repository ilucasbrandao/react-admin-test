import { fetchUtils } from "react-admin";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // Aqui você pode adicionar token se usar autenticação
  const token = localStorage.getItem("token");
  if (token) {
    options.headers.set("Authorization", `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = {
  getList: async (resource: string) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`);
    return {
      data: json.map((item: any) => ({ ...item, id: item.id })),
      total: json.length,
    };
  },

  getOne: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return { data: { ...json, id: json.id } };
  },

  create: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return { data: { ...json, id: json.id } };
  },

  update: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return { data: { ...json, id: json.id } };
  },

  delete: async (resource: string, params: any) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, { method: "DELETE" });
    return { data: { id: params.id } };
  },

  deleteMany: async (resource: string, params: any) => {
    await Promise.all(
      params.ids.map((id: any) =>
        httpClient(`${apiUrl}/${resource}/${id}`, { method: "DELETE" })
      )
    );
    return { data: params.ids };
  },

  getMany: async (resource: string, params: any) => {
    const { json } = await httpClient(
      `${apiUrl}/${resource}?ids=${params.ids.join(",")}`
    );
    return { data: json.map((item: any) => ({ ...item, id: item.id })) };
  },

  getManyReference: async (resource: string, params: any) => {
    const { json } = await httpClient(
      `${apiUrl}/${resource}?${params.target}=${params.id}`
    );
    return { data: json.map((item: any) => ({ ...item, id: item.id })), total: json.length };
  },

updateMany: async (resource: string, params: any) => {
  const responses = await Promise.all(
    params.ids.map((id: any) =>
      httpClient(`${apiUrl}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
        headers: new Headers({ "Content-Type": "application/json" }),
      })
    )
  );

  const data = responses.map((response: any) => ({ ...response.json, id: response.json.id }));
  return { data };
},

};

export default dataProvider;
