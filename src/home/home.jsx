import React from "react";
import { Header } from "../components/header";
import { useGetProducts } from "../service/query/useGetProducts";
import { List } from "../components/list";
import { Button, Container, Grid2, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const Home = () => {
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetProducts();
    const { ref, inView } = useInView();
    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return (
        <div>
            <Header />
            <Container>
                <Grid2 spacing={"20px"} container>
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <>
                            {data?.pages.map((page) =>
                                page.map((item) => (
                                    <Grid2 size={4} key={item.id}>
                                        <List {...item} />
                                    </Grid2>
                                ))
                            )}
                        </>
                    )}
                </Grid2>
                {hasNextPage ? <h1 ref={ref}>Loading...</h1> : ""}
            </Container>
        </div>
    );
};
