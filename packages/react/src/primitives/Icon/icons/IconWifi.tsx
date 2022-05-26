import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconWifi } from '@aws-amplify/ui-react';` → `import { MdWifi } from 'react-icons/md';`
 */
export const IconWifi = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconWifi } from '@aws-amplify/ui-react'; → import { MdWifi } from 'react-icons/md';`,
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
          d="M1 8.99977L3 10.9998C7.97 6.02977 16.03 6.02977 21 10.9998L23 8.99977C16.93 2.92977 7.08 2.92977 1 8.99977ZM9 16.9998L12 19.9998L15 16.9998C13.35 15.3398 10.66 15.3398 9 16.9998ZM5 12.9998L7 14.9998C9.76 12.2398 14.24 12.2398 17 14.9998L19 12.9998C15.14 9.13977 8.87 9.13977 5 12.9998Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
