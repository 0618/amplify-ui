import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconNotListedLocation } from '@aws-amplify/ui-react';` → `import { MdNotListedLocation } from 'react-icons/md';`
 */
export const IconNotListedLocation = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconNotListedLocation } from '@aws-amplify/ui-react'; → import { MdNotListedLocation } from 'react-icons/md';`,
  });
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.01 16C11.74 16 11.49 15.9 11.3 15.71C11.1 15.51 11.01 15.28 11.01 15C11 14.45 11.44 14.01 11.99 14C12 14 12 14 12.01 14C12.29 14 12.52 14.1 12.72 14.29C12.9 14.48 13 14.72 13 14.99C13 15.26 12.9 15.5 12.71 15.7C12.52 15.9 12.28 16 12.01 16ZM11.13 12.34C11.13 11.89 11.23 11.5 11.42 11.18C11.61 10.85 11.95 10.48 12.42 10.06C12.7 9.81 12.9 9.59 13.03 9.4C13.16 9.21 13.22 9 13.22 8.76C13.22 8.47 13.11 8.23 12.9 8.02C12.69 7.82 12.4 7.72 12.05 7.72C11.68 7.72 11.31 7.82 11.09 8.02C10.88 8.22 10.69 8.47 10.69 9H9C9 7.99 9.46 7.27 9.97 6.79C10.53 6.28 11.25 6 12 6C12.59 6 13.11 6.12 13.57 6.35C14.03 6.58 14.36 6.9 14.62 7.31C14.88 7.72 15 8.17 15 8.66C15 9.15 14.9 9.56 14.69 9.91C14.48 10.26 14.21 10.62 13.8 11C13.48 11.3 13.27 11.56 13.15 11.77C13.03 11.98 12.97 12.26 12.97 12.58V13H11.12V12.34H11.13ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
