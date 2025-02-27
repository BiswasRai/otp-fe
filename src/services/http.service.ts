export const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    throw new Error(jsonResponse?.message || "Something went wrong");
  }

  return jsonResponse;
};
