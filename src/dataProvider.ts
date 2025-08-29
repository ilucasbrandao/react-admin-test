import { fetchUtils } from "react-admin";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: async (resource: any) => {
  try {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url);
    return {
      data: json.map((item: any) => ({ ...item, id: item.id })),
      total: json.length,
    };
  } catch (error) {
    console.error(`Erro ao buscar ${resource}:`, error);
    throw error;
  }

  },

  getOne: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  create: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return { data: { ...json } };
  },

  update: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return { data: { ...json } };
  },

  delete: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    await httpClient(url, { method: "DELETE" });
    return { data: { id: params.id } };
  },

  deleteMany: async (resource: any, params: any) => {
    await Promise.all(
      params.ids.map((id: any) =>
        httpClient(`${apiUrl}/${resource}/${id}`, { method: "DELETE" })
      )
    );
    return { data: params.ids };
  },
};

export default dataProvider;
