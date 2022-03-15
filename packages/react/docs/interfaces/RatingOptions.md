# Interface: RatingOptions

## Hierarchy

- **`RatingOptions`**

  ↳ [`RatingProps`](RatingProps.md)

## Properties

### emptyColor

• `Optional` **emptyColor**: `Color`

The CSS color to use on the empty rating icon
Default css value is #A2A2A2

#### Defined in

[rating.ts:13](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L13)

---

### emptyIcon

• `Optional` **emptyIcon**: `Element`

This will override which icon to use as the empty icon. This will only
override the empty icon an will create a rating component that uses
different icons for filled and empty icons.

#### Defined in

[rating.ts:20](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L20)

---

### fillColor

• `Optional` **fillColor**: `Color`

The CSS color to use on the filled rating icon
Default css value is #ffb400

#### Defined in

[rating.ts:26](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L26)

---

### icon

• `Optional` **icon**: `Element`

This will override which icon to use. This will override both
the filled and empty icon values unless an empty icon is specified
with the emptyIcon prop
Default is <IconStar />

#### Defined in

[rating.ts:34](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L34)

---

### maxValue

• `Optional` **maxValue**: `number`

The max rating integer value
Default is 5

#### Defined in

[rating.ts:40](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L40)

---

### size

• `Optional` **size**: [`Sizes`](../modules.md#sizes)

This will set the icon size of the stars
Default css value is medium

#### Defined in

[rating.ts:47](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L47)

---

### value

• `Optional` **value**: `number`

The value of the rating
Default is 0

#### Defined in

[rating.ts:53](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/rating.ts#L53)
