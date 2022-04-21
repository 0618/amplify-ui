import * as React from 'react';

import {
  Button,
  ColorMode,
  Divider,
  Flex,
  Link,
  SearchField,
  ToggleButton,
  ToggleButtonGroup,
  View,
  VisuallyHidden,
} from '@aws-amplify/ui-react';
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
} from 'react-instantsearch-dom';
import {
  MdBedtime,
  MdClose,
  MdMenu,
  MdOpenInNew,
  MdTonality,
  MdWbSunny,
} from 'react-icons/md';

import { FrameworkChooser } from './FrameworkChooser';
import LinkButton from './LinkButton';
import { Logo } from '@/components/Logo';
import NextLink from 'next/link';
import { SecondaryNav } from './SecondaryNav';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';

const SearchBox = (data) => {
  const { currentRefinement, isSearchStalled, refine } = data;
  console.log('data --> ', data);
  return (
    <form noValidate action="" role="search">
      <SearchField
        placeholder="Search..."
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        onSubmit={() => refine('')}
      />
      {isSearchStalled ? 'My search is stalled' : ''}
    </form>
  );
};

const Hits = ({ hits }) => {
  console.log(hits);
  return null;
};

const CustomSearchBox = connectSearchBox(SearchBox);

const CustomHits = connectHits(Hits);

const NavLink = ({
  href,
  children,
  isExternal = false,
  onClick,
}: {
  href: string;
  children: React.ReactElement;
  isExternal?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  const { pathname, query } = useRouter();
  const isCurrent = pathname.startsWith(href) && href !== '/';
  const className = `docs-nav-link ${isCurrent ? 'current' : ''}`;

  if (isExternal) {
    return (
      <Link isExternal href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <NextLink href={{ pathname: href, query }} passHref>
      <LinkButton href={href} classNames={className} onClick={onClick}>
        {children}
      </LinkButton>
    </NextLink>
  );
};

const Nav = (props) => (
  <Flex as="nav" className="docs-nav" alignItems="center" gap="0" grow="1">
    <NavLink {...props} href="/getting-started/installation">
      Getting started
    </NavLink>
    <NavLink {...props} href="/components">
      Components
    </NavLink>
    <NavLink {...props} href="/theming">
      Theming
    </NavLink>
    <Divider orientation="vertical" />
    <NavLink {...props} isExternal href="https://docs.amplify.aws">
      Amplify docs <MdOpenInNew />
    </NavLink>
  </Flex>
);

const Settings = ({ platform, setColorMode, colorMode }) => (
  <Flex className="docs-settings" justifyContent="center" alignItems="center">
    <FrameworkChooser platform={platform} />
    <ColorModeSwitcher setColorMode={setColorMode} colorMode={colorMode} />
  </Flex>
);

const ColorModeSwitcher = ({ colorMode, setColorMode }) => {
  return (
    <ToggleButtonGroup
      value={colorMode}
      size="small"
      onChange={(value: ColorMode) => setColorMode(value)}
      isExclusive
      isSelectionRequired
      className="color-switcher"
    >
      <ToggleButton value="light">
        <VisuallyHidden>Light mode</VisuallyHidden>
        <MdWbSunny />
      </ToggleButton>
      <ToggleButton value="dark">
        <VisuallyHidden>Dark mode</VisuallyHidden>
        <MdBedtime />
      </ToggleButton>
      <ToggleButton value="system">
        <VisuallyHidden>System preference</VisuallyHidden>
        <MdTonality />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const Header = ({ platform, colorMode, setColorMode }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [showSearchResult, setShowSearchResult] = React.useState(false);

  const searchClient = algoliasearch(
    'VWBXXCSMEN',
    'a9a0e0bf1d18ac636881324e877bd471'
  );

  return (
    <>
      <header className={`docs-header ${expanded ? 'expanded' : ''}`}>
        <Button
          className="docs-header-menu-button"
          onClick={() => setExpanded(!expanded)}
          ariaLabel="Docs header menu button"
        >
          {expanded ? (
            <MdClose style={{ width: '1.5rem', height: '1.5rem' }} />
          ) : (
            <MdMenu style={{ width: '1.5rem', height: '1.5rem' }} />
          )}
        </Button>

        <NavLink href="/">
          <span className="docs-logo-link">
            <VisuallyHidden>Amplify UI Home</VisuallyHidden>
            <Logo />
          </span>
        </NavLink>

        <Nav />
        <View>
          <InstantSearch indexName="amplify-dev-ui" searchClient={searchClient}>
            <CustomSearchBox />
            {true && <CustomHits />}
          </InstantSearch>
        </View>
        <Settings
          colorMode={colorMode}
          setColorMode={setColorMode}
          platform={platform}
        />
      </header>
      {expanded ? (
        <View className="docs-header-mobile-nav">
          <Flex
            className="color-switcher__wrapper"
            justifyContent="center"
            alignItems="center"
          >
            <ColorModeSwitcher
              setColorMode={setColorMode}
              colorMode={colorMode}
            />
          </Flex>

          <Nav onClick={() => setExpanded(false)} />
          <nav className="docs-sidebar-nav">
            <SecondaryNav onClick={() => setExpanded(false)} />
          </nav>
        </View>
      ) : null}
    </>
  );
};
