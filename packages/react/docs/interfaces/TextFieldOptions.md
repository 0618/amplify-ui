# Interface: TextFieldOptions

## Hierarchy

- [`FieldProps`](FieldProps.md)

- [`FlexContainerStyleProps`](FlexContainerStyleProps.md)

  ↳ **`TextFieldOptions`**

  ↳↳ [`TextInputFieldProps`](TextInputFieldProps.md)

  ↳↳ [`TextAreaFieldMultilineProps`](TextAreaFieldMultilineProps.md)

## Properties

### alignContent

• `Optional` **alignContent**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`AlignContent`\>

Sets the distribution of space between and around content items

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[alignContent](FlexContainerStyleProps.md#aligncontent)

#### Defined in

[style.ts:103](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L103)

---

### alignItems

• `Optional` **alignItems**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`AlignItems`\>

Controls where the Flex/Grid items sit on the cross axis.

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[alignItems](FlexContainerStyleProps.md#alignitems)

#### Defined in

[style.ts:98](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L98)

---

### columnGap

• `Optional` **columnGap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`GridColumnGap`<`0` \| `string` & {}\>\>\>

Spacing between Flex/Grid child columns

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[columnGap](FlexContainerStyleProps.md#columngap)

#### Defined in

[style.ts:118](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L118)

---

### descriptiveText

• `Optional` **descriptiveText**: `ReactNode`

Provides additional information needed to fill field
(e.g. password requirements, etc.)

#### Inherited from

[FieldProps](FieldProps.md).[descriptiveText](FieldProps.md#descriptivetext)

#### Defined in

[field.ts:13](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L13)

---

### direction

• `Optional` **direction**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`FlexDirection`\>

Sets how flex items are placed in the flex container defining the main axis
and the direction (normal or reversed). (maps to flex-direction CSS property)

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[direction](FlexContainerStyleProps.md#direction)

#### Defined in

[flex.ts:11](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/flex.ts#L11)

---

### errorMessage

• `Optional` **errorMessage**: `string`

When defined and `hasError` is true, show error message

#### Inherited from

[FieldProps](FieldProps.md).[errorMessage](FieldProps.md#errormessage)

#### Defined in

[field.ts:18](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L18)

---

### gap

• `Optional` **gap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`Gap`<`0` \| `string` & {}\>\>\>

Spacing between child components. Shorthand for rowGap and columnGap.

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[gap](FlexContainerStyleProps.md#gap)

#### Defined in

[style.ts:113](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L113)

---

### innerEndComponent

• `Optional` **innerEndComponent**: `ReactNode`

FieldGroupIconButton component to show inside of input at end

#### Defined in

[textField.ts:27](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/textField.ts#L27)

---

### innerStartComponent

• `Optional` **innerStartComponent**: `ReactNode`

FieldGroupIconButton component to show inside of input at start

#### Defined in

[textField.ts:22](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/textField.ts#L22)

---

### justifyContent

• `Optional` **justifyContent**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`JustifyContent`\>

Controls where the Flex/Grid items sit on the main axis.

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[justifyContent](FlexContainerStyleProps.md#justifycontent)

#### Defined in

[style.ts:108](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L108)

---

### label

• **label**: `ReactNode`

Label text for field (required)

#### Inherited from

[FieldProps](FieldProps.md).[label](FieldProps.md#label)

#### Defined in

[field.ts:23](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L23)

---

### labelHidden

• `Optional` **labelHidden**: `boolean`

Visually hide label (not recommended in most cases)

**`default`** false

#### Inherited from

[FieldProps](FieldProps.md).[labelHidden](FieldProps.md#labelhidden)

#### Defined in

[field.ts:29](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L29)

---

### outerEndComponent

• `Optional` **outerEndComponent**: `ReactNode`

Component(s) to show after input

#### Defined in

[textField.ts:12](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/textField.ts#L12)

---

### outerStartComponent

• `Optional` **outerStartComponent**: `ReactNode`

Component(s) to show before input

#### Defined in

[textField.ts:17](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/textField.ts#L17)

---

### rowGap

• `Optional` **rowGap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`RowGap`<`0` \| `string` & {}\>\>\>

Spacing between Flex/Grid child rows

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[rowGap](FlexContainerStyleProps.md#rowgap)

#### Defined in

[style.ts:123](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L123)

---

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

Input field type (only applies when isMultiline = false)

#### Defined in

[textField.ts:32](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/textField.ts#L32)

---

### wrap

• `Optional` **wrap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`FlexWrap`\>

The flexWrap property is set on containers and it controls what happens when
children overflow the size of the container along the main axis. By default,
children are forced into a single line (which can shrink elements). If
wrapping is allowed, items are wrapped into multiple lines along the main
axis if needed.
(maps to flex-wrap CSS property)

#### Inherited from

[FlexContainerStyleProps](FlexContainerStyleProps.md).[wrap](FlexContainerStyleProps.md#wrap)

#### Defined in

[flex.ts:21](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/flex.ts#L21)
