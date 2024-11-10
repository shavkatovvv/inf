import { Stack, TextField } from "@mui/material";
import React from "react";
import { useDebounce } from "../useDeBounce/useDeBounce";
import { useSearch } from "../service/useSearch";

export const Header = () => {
    const [input, setinput] = React.useState("");
    const debounceValue = useDebounce(input);
    const { data, isLoading } = useSearch(debounceValue);

    return (
        <Stack p={"30px"} position={"relative"}>
            <TextField
                sx={{
                    width: "500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                value={input}
                onChange={(e) => setinput(e.target.value)}
            />
            {!isLoading && (
                <Stack>
                    {data.map((item) => (
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            p="20px"
                            mt={"20px"}
                            width={"500px"}
                            marginLeft={"auto"}
                            marginRight={"auto"}
                            border={"1px solid grey"}
                            key={item.id}
                        >
                            <img style={{ width: "150px" }} src={item.img} />
                            <h3>{item.title}</h3>
                        </Stack>
                    ))}
                </Stack>
            )}
        </Stack>
    );
};
