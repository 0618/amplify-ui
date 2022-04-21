import * as React from 'react';

import { Card, Collection, Link, SearchField } from '@aws-amplify/ui-react';
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
} from 'react-instantsearch-dom';

import algoliasearch from 'algoliasearch/lite';

const SearchContext = React.createContext({
  currentRefinement: '',
  setCurrentRefinement: (val) => {},
});

const SearchBox = (data) => {
  const { currentRefinement, isSearchStalled, refine } = data;
  console.log('data --> ', data); // TODO: remove console log
  return (
    <SearchContext.Consumer>
      {({ setCurrentRefinement }) => (
        <form noValidate action="" role="search">
          <SearchField
            label="search"
            labelHidden={true}
            placeholder="Search..."
            value={currentRefinement}
            onChange={(event) => {
              setCurrentRefinement(event.currentTarget.value);
              return refine(event.currentTarget.value);
            }}
            onSubmit={() => refine('')}
          />
          {isSearchStalled ? 'My search is stalled' : ''}
        </form>
      )}
    </SearchContext.Consumer>
  );
};

const Hits = ({ hits }) => {
  console.log(hits); // TODO: remove console log
  return (
    <SearchContext.Consumer>
      {({ currentRefinement }) => {
        console.log('current ->', currentRefinement);
        return currentRefinement ? (
          <Collection
            type="list"
            items={hits.slice(0, 8)}
            rowGap={'0.1em'}
            direction="column"
            justifyContent="space-between"
            wrap="wrap"
            className="search__result"
          >
            {(item, index) => (
              <Card key={index} padding="1rem">
                <Link href={item.url}>{item.hierarchy.lvl1}</Link>
              </Card>
            )}
          </Collection>
        ) : null;
      }}
    </SearchContext.Consumer>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);

const CustomHits = connectHits(Hits);

const searchClient = algoliasearch(
  'VWBXXCSMEN',
  'a9a0e0bf1d18ac636881324e877bd471'
);

const Search = ({ currentRefinement, setCurrentRefinement }) => (
  <SearchContext.Provider
    value={
      { currentRefinement, setCurrentRefinement } as {
        currentRefinement: string;
        setCurrentRefinement: (string) => void;
      }
    }
  >
    <InstantSearch indexName="amplify-dev-ui" searchClient={searchClient}>
      <CustomSearchBox />
      {true && <CustomHits />}
    </InstantSearch>
  </SearchContext.Provider>
);

export { Search };
