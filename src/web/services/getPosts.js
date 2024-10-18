import { postEndpoints } from "../utils/endpoints";

async function postService({ id, filters = {} }) {
    const endPoint = id ? postEndpoints.getById({ id }) : postEndpoints.get({ filters });
    const res = await fetch(endPoint,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    if (!res.ok) throw new Error(res);
    const data = await res.json();
    return data;
}

export default postService;