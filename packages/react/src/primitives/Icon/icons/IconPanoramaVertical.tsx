import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconPanoramaVertical } from '@aws-amplify/ui-react';` → `import { MdPanoramaVertical } from 'react-icons/md';`
 */
export const IconPanoramaVertical = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconPanoramaVertical } from '@aws-amplify/ui-react'; → import { MdPanoramaVertical } from 'react-icons/md';`,
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
          d="M19.94 21.12C18.84 18.18 18.3 15.09 18.3 12C18.3 8.91 18.85 5.82 19.94 2.88C19.98 2.77 20 2.66 20 2.57C20 2.23 19.77 2 19.37 2H4.63C4.23 2 4 2.23 4 2.57C4 2.67 4.02 2.77 4.06 2.88C5.16 5.82 5.71 8.91 5.71 12C5.71 15.09 5.16 18.18 4.07 21.12C4.02 21.23 4 21.34 4 21.43C4 21.76 4.23 22 4.63 22H19.38C19.77 22 20.01 21.76 20.01 21.43C20 21.33 19.98 21.23 19.94 21.12V21.12ZM6.54 20C7.31 17.4 7.7 14.72 7.7 12C7.7 9.28 7.31 6.6 6.54 4H17.45C16.68 6.6 16.29 9.28 16.29 12C16.29 14.72 16.68 17.4 17.45 20H6.54Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
