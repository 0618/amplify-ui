import { CheckboxField, ThemeProvider, Theme } from '@aws-amplify/ui-react';

const theme: Theme = {
  name: 'checkbox-theme',
  tokens: {
    components: {
      checkbox: {
        button: {
          color: { value: '{colors.yellow.40.value}' },
          _focus: {
            outlineColor: { value: '{colors.blue.40.value}' },
            borderColor: { value: '{colors.red.40.value}' },
          },
        },
        icon: {
          backgroundColor: { value: '{colors.brand.secondary.80.value}' },
        },
      },
    },
  },
};

export const CheckboxFieldThemeExample = () => (
  <ThemeProvider theme={theme}>
    <CheckboxField label="Subscribe" name="subscribe" value="yes" />
  </ThemeProvider>
);
