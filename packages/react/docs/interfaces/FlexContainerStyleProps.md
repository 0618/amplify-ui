# Interface: FlexContainerStyleProps

## Hierarchy

- [`CSSLayoutStyleProps`](CSSLayoutStyleProps.md)

  ↳ **`FlexContainerStyleProps`**

  ↳↳ [`ButtonProps`](ButtonProps.md)

  ↳↳ [`FlexProps`](FlexProps.md)

  ↳↳ [`RadioGroupFieldProps`](RadioGroupFieldProps.md)

  ↳↳ [`SelectFieldProps`](SelectFieldProps.md)

  ↳↳ [`AllStyleProps`](AllStyleProps.md)

  ↳↳ [`TextAreaFieldProps`](TextAreaFieldProps.md)

  ↳↳ [`TextFieldOptions`](TextFieldOptions.md)

## Properties

### alignContent

• `Optional` **alignContent**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`AlignContent`\>

Sets the distribution of space between and around content items

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[alignContent](CSSLayoutStyleProps.md#aligncontent)

#### Defined in

[style.ts:103](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L103)

---

### alignItems

• `Optional` **alignItems**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`AlignItems`\>

Controls where the Flex/Grid items sit on the cross axis.

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[alignItems](CSSLayoutStyleProps.md#alignitems)

#### Defined in

[style.ts:98](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L98)

---

### columnGap

• `Optional` **columnGap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`GridColumnGap`<`0` \| `string` & {}\>\>\>

Spacing between Flex/Grid child columns

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[columnGap](CSSLayoutStyleProps.md#columngap)

#### Defined in

[style.ts:118](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L118)

---

### direction

• `Optional` **direction**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`FlexDirection`\>

Sets how flex items are placed in the flex container defining the main axis
and the direction (normal or reversed). (maps to flex-direction CSS property)

#### Defined in

[flex.ts:11](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/flex.ts#L11)

---

### gap

• `Optional` **gap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`Gap`<`0` \| `string` & {}\>\>\>

Spacing between child components. Shorthand for rowGap and columnGap.

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[gap](CSSLayoutStyleProps.md#gap)

#### Defined in

[style.ts:113](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L113)

---

### justifyContent

• `Optional` **justifyContent**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`JustifyContent`\>

Controls where the Flex/Grid items sit on the main axis.

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[justifyContent](CSSLayoutStyleProps.md#justifycontent)

#### Defined in

[style.ts:108](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L108)

---

### rowGap

• `Optional` **rowGap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`StyleToken`<`RowGap`<`0` \| `string` & {}\>\>\>

Spacing between Flex/Grid child rows

#### Inherited from

[CSSLayoutStyleProps](CSSLayoutStyleProps.md).[rowGap](CSSLayoutStyleProps.md#rowgap)

#### Defined in

[style.ts:123](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/style.ts#L123)

---

### wrap

• `Optional` **wrap**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`FlexWrap`\>

The flexWrap property is set on containers and it controls what happens when
children overflow the size of the container along the main axis. By default,
children are forced into a single line (which can shrink elements). If
wrapping is allowed, items are wrapped into multiple lines along the main
axis if needed.
(maps to flex-wrap CSS property)

#### Defined in

[flex.ts:21](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/flex.ts#L21)
