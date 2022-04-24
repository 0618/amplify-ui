import * as React from 'react';

import { Card, Collection, Link, SearchField } from '@aws-amplify/ui-react';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Search = () => {
  const [query, setQuery] = React.useState('');

  const url = `https://v0gikdsf4c.execute-api.us-east-1.amazonaws.com/test/search/?q=${query}*`; // API Gateway set up in 200176217753 https://tiny.amazon.com/18sedylu0/IsenLink
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <p>No search data</p>;
  console.log(query, 'data:', data);

  return (
    <form noValidate action="" role="search">
      <SearchField
        label="search"
        labelHidden={true}
        placeholder="Search..."
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
        }}
      />
    </form>
  );
};
