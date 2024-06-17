export const BASE_URL = "http://127.0.0.1:1337";

export type fetchOpt = {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
};

export async function fetchData<T>(opt: fetchOpt): Promise<T | null | []> {
  try {
    const res = await fetch(BASE_URL + opt.url, {
      method: opt.method,
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
