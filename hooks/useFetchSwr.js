import useSWR from 'swr';
import getSWRData from '../helpers/get_swr_data';

// This hook is used to fetch data from the API
export const useFetchSwr = (path, mounted) => {
    const API_URL = process.env.SERVER_API;
    const fetcher = getSWRData(API_URL, path);
    const { data, error, mutate, isValidating } = useSWR( mounted ? path : null, fetcher);

    return ({data, error, mutate, isValidating});
}