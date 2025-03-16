import { useSearchParams } from 'react-router-dom';

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const setQuery = (newQuery: string) => {
    setSearchParams({ q: newQuery }, { replace: true });
  };

  return { query, setQuery };
};
