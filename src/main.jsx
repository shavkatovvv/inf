import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClientProvider } from "react-query";
import { client } from "./client/client.js";

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={client}>
        <App />;
    </QueryClientProvider>
);
