import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./client/client.js";

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={client}>
        <CssBaseline />
        <App />
    </QueryClientProvider>
);
