import axios from "axios";

interface ApiResponse {
  prediction: string;
}

const chatEndpoint =
  import.meta.env.VITE_SERVER_URL + import.meta.env.VITE_CHAT_ENDPOINT;

export const sendQuery = (query: string, personalization:string): Promise<string> => {
  return axios
    .post<ApiResponse>(chatEndpoint, { text: query, persona: personalization })
    .then((response) => response.data.prediction)
    .catch((error) => {
      console.error("Error sending query:", error);
      throw error;
    });
};
