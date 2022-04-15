import * as React from 'react';

import {
  Flex,
  SelectField,
  SwitchField,
  TextField,
  TextProps,
  TextVariation,
} from '@aws-amplify/ui-react';

export interface TextPropControlsProps extends TextProps {
  setAs: (value: React.SetStateAction<TextProps['as']>) => void;
  setVariation: (value: React.SetStateAction<TextProps['variation']>) => void;
  setIsTruncated: (
    value: React.SetStateAction<TextProps['isTruncated']>
  ) => void;
  setColor: (value: React.SetStateAction<TextProps['color']>) => void;
  setLineHeight: (value: React.SetStateAction<TextProps['lineHeight']>) => void;
  setFontWeight: (value: React.SetStateAction<TextProps['fontWeight']>) => void;
  setFontStyle: (value: React.SetStateAction<TextProps['fontStyle']>) => void;
  setFontSize: (value: React.SetStateAction<TextProps['fontSize']>) => void;
  setTextDecoration: (
    value: React.SetStateAction<TextProps['textDecoration']>
  ) => void;
}

interface TextPropControlsInterface {
  (props: TextPropControlsProps): JSX.Element;
}

export const TextPropControls: TextPropControlsInterface = ({
  variation,
  setVariation,
  as,
  setAs,
  isTruncated,
  setIsTruncated,
  color,
  setColor,
  lineHeight,
  setLineHeight,
  fontWeight,
  setFontWeight,
  fontSize,
  setFontSize,
  fontStyle,
  setFontStyle,
  textDecoration,
  setTextDecoration,
}) => {
  const VARIATIONS_OPTIONS = [
    'primary',
    'secondary',
    'tertiary',
    'error',
    'warning',
    'info',
    'success',
  ];

  const AS_OPTIONS = ['p', 'span', 'strong', 'em'];

  return (
    <Flex direction="column">
      <SelectField
        name="variation"
        value={String(variation)}
        onChange={(event) => setVariation(event.target.value as TextVariation)}
        label="variation"
      >
        {VARIATIONS_OPTIONS.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </SelectField>
      <SelectField
        name="as"
        value={String(as)}
        onChange={(event) => setAs(event.target.value as TextProps['as'])}
        label="as"
      >
        {AS_OPTIONS.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </SelectField>
      <TextField
        label="color"
        placeholder={String(color)}
        onChange={(event) => setColor(event.target.value)}
      />
      <SwitchField
        label="isTruncated"
        defaultChecked={isTruncated}
        labelPosition="end"
        onChange={(event) => setIsTruncated(event.target.checked)}
      />
    </Flex>
  );
  return null;
};
