import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconContactMail } from '@aws-amplify/ui-react';` → `import { MdContactMail } from 'react-icons/md';`
 */
export const IconContactMail = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconContactMail } from '@aws-amplify/ui-react'; → import { MdContactMail } from 'react-icons/md';`,
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
          d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM22 19H2V5H22V19ZM21 6H14V11H21V6ZM20 8L17.5 9.75L15 8V7L17.5 8.75L20 7V8ZM9 12C10.65 12 12 10.65 12 9C12 7.35 10.65 6 9 6C7.35 6 6 7.35 6 9C6 10.65 7.35 12 9 12ZM9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8ZM15 16.59C15 14.09 11.03 13.01 9 13.01C6.97 13.01 3 14.09 3 16.59V18H15V16.59ZM5.48 16C6.22 15.5 7.7 15 9 15C10.3 15 11.77 15.49 12.52 16H5.48Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
