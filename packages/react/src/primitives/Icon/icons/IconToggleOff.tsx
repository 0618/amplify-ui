import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconToggleOff } from '@aws-amplify/ui-react';` → `import { MdToggleOff } from 'react-icons/md';`
 */
export const IconToggleOff = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconToggleOff } from '@aws-amplify/ui-react'; → import { MdToggleOff } from 'react-icons/md';`,
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
          d="M17 6H7C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18H17C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM17 16H7C4.79 16 3 14.21 3 12C3 9.79 4.79 8 7 8H17C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16ZM7 9C5.34 9 4 10.34 4 12C4 13.66 5.34 15 7 15C8.66 15 10 13.66 10 12C10 10.34 8.66 9 7 9Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
