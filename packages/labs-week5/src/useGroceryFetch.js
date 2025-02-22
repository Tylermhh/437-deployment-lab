import React, {useEffect} from "react";
import {groceryFetcher} from "./groceryFetcher.js";

export function useGroceryFetch(url) {
    const [groceryData, setGroceryData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    useEffect(() => {
        let isStale = false;

        async function fetchData(url) {
            setGroceryData([]);
            setIsLoading(true);
            setError(null);
            const promise = groceryFetcher.fetch(url);
            promise
                .then((data) => {
                    if (!isStale) {
                        setGroceryData(data);
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    if (!isStale) {
                        console.log(err)
                    }
                });


        }
        fetchData(url)
        return () => {
            isStale = true
        };
    }, [url])

    return {
        groceryData,
        isLoading,
        error,
    }
}