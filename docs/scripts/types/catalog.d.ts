export type ComponentName =
  | 'Alert'
  | 'Badge'
  | 'Button'
  | 'ButtonGroup'
  | 'Card'
  | 'CheckboxField'
  | 'Collection'
  | 'Divider'
  | 'Expander'
  | 'ExpanderItem'
  | 'FieldGroupIcon'
  | 'FieldGroupIconButton'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'Icon'
  | 'Image'
  | 'Link'
  | 'Loader'
  | 'Menu'
  | 'MenuButton'
  | 'MenuItem'
  | 'Pagination'
  | 'PasswordField'
  | 'PhoneNumberField'
  | 'Placeholder'
  | 'Radio'
  | 'RadioGroupField'
  | 'Rating'
  | 'ScrollView'
  | 'SearchField'
  | 'SelectField'
  | 'SliderField'
  | 'StepperField'
  | 'SwitchField'
  | 'Tabs'
  | 'TabItem'
  | 'Text'
  | 'TextAreaField'
  | 'TextField'
  | 'ToggleButton'
  | 'ToggleButtonGroup'
  | 'View'
  | 'VisuallyHidden'
  | 'Table'
  | 'TableBody'
  | 'TableCell'
  | 'TableFoot'
  | 'TableHead'
  | 'TableRow';

export type Category =
  | 'AlertProps'
  | 'AnchorHTMLAttributes'
  | 'AriaAttributes'
  | 'AriaProps'
  | 'Attributes'
  | 'Base'
  | 'BaseComponentProps'
  | 'BasePaginationProps'
  | 'BaseStyleProps'
  | 'ButtonHTMLAttributes'
  | 'ButtonProps'
  | 'CollectionBaseProps'
  | 'CollectionWrapperProps'
  | 'CSSLayoutStyleProps'
  | 'DOMAttributes'
  | 'ExpanderProps'
  | 'FieldGroupIconProps'
  | 'FieldProps'
  | 'FlexContainerStyleProps'
  | 'FlexItemStyleProps'
  | 'GridContainerStyleProps'
  | 'GridItemStyleProps'
  | 'HeadingProps'
  | 'HTMLAttributes'
  | 'IconProps'
  | 'ImageOptions'
  | 'ImageStyleProps'
  | 'ImgHTMLAttributes'
  | 'InputHTMLAttributes'
  | 'InputProps'
  | 'LinkOptions'
  | 'LoaderProps'
  | 'MenuProps'
  | 'Other'
  | 'PasswordFieldProps'
  | 'PhoneNumberFieldProps'
  | 'PlaceholderProps'
  | 'RatingOptions'
  | 'RefAttributes'
  | 'SearchFieldProps'
  | 'SelectFieldProps'
  | 'SelectProps'
  | 'SliderFieldProps'
  | 'SliderProps'
  | 'StepperFieldProps'
  | 'SVGAttributes'
  | 'SwitchFieldProps'
  | 'TableCellProps'
  | 'TableHTMLAttributes'
  | 'TableProps'
  | 'TabsProps'
  | 'TdHTMLAttributes'
  | 'TextareaHTMLAttributes'
  | 'TextAreaProps'
  | 'TextAreaStyleProps'
  | 'TextFieldOptions'
  | 'TextProps'
  | 'ToggleButtonGroupProps'
  | 'ToggleButtonProps'
  | 'ViewProps';

export type Property = {
  name: string;
  type: string;
  description: string;
  category: Category;
  isOptional: boolean;
};
export type Properties = Record<string, Property>;

export type Catalog = Record<ComponentName, Properties>;

export type PropsTableSubComponentData = {
  [key in ComponentName]: {
    string: {
      [key in 'Main' | 'Layout']: Properties;
    };
  }[];
};

export type PropsTableData =
  | {
      [key in ComponentName]: PropsTableSubComponentData;
    }
  | {};
