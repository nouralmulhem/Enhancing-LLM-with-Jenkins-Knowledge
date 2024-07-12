import axios from "axios";

interface ApiResponse {
  prediction: string;
}

const chatEndpoint = "https://32e1-34-124-179-223.ngrok-free.app/api";

export const sendQuery = (query: string, personalization:string): Promise<string> => {
  return axios
    .post<ApiResponse>(chatEndpoint, { text: query, persona: personalization })
    .then((response) => response.data.prediction)
    .catch((error) => {
      console.error("Error sending query:", error);
      throw error;
    });
};

// export const sendQuery = (
//   query: string,
//   onMessage: (message: string) => void
// ): void => {
//   const eventSource = new EventSource(
//     `${chatEndpoint}?query=${encodeURIComponent(query)}`
//   );

//   eventSource.onmessage = (event) => {
//     const response = event.data;
//     onMessage(response);
//   };

//   eventSource.onerror = (error) => {
//     console.error("Error receiving response:", error);
//     eventSource.close();
//   };
// };
