export const postData = async (url = "", data = {}) => {
  console.log(url, data);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response, "res");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`
      );
    }

    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    console.error("There was an error with the fetch operation:", error);
    throw error;
  }
};
