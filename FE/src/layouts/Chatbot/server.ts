import axios from "axios";

interface ApiResponse {
  prediction: string;
}

const chatEndpoint = "https://32e1-34-124-179-223.ngrok-free.app/api";

export const sendQuery = (query: string): Promise<string> => {
  return axios
    .post<ApiResponse>(chatEndpoint, { data: query })
    .then((response) => response.data.prediction)
    .catch((error) => {
      console.error("Error sending query:", error);
      throw error;
    });
};
