const apiTodo = async(params, { rejectWithValue }) => {
    try {
        const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
        const requestId = params.id || "";
        const response = await fetch(baseUrl + requestId, {
            method: params.method,
            headers: {
                "Content-Type": "application/json;",
            },
            body: params.body || "",
        });

        if (!response.ok) {
            throw Error("Произошла ошибка");
        }

        return await response.json();
    } catch (Error) {
        return rejectWithValue([]);
    }
};

export { apiTodo };