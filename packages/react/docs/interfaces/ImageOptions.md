# Interface: ImageOptions

## Hierarchy

- [`ImageStyleProps`](ImageStyleProps.md)

  ↳ **`ImageOptions`**

  ↳↳ [`ImageProps`](ImageProps.md)

## Properties

### alt

• **alt**: `string`

Alternative text description of the image (required)

**`see`** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt

#### Defined in

[image.ts:16](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L16)

---

### objectFit

• `Optional` **objectFit**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`ObjectFit`\>

#### Inherited from

[ImageStyleProps](ImageStyleProps.md).[objectFit](ImageStyleProps.md#objectfit)

#### Defined in

[image.ts:7](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L7)

---

### objectPosition

• `Optional` **objectPosition**: [`ResponsiveStyle`](../modules.md#responsivestyle)<`ObjectPosition`<`0` \| `string` & {}\>\>

#### Inherited from

[ImageStyleProps](ImageStyleProps.md).[objectPosition](ImageStyleProps.md#objectposition)

#### Defined in

[image.ts:8](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L8)

---

### sizes

• `Optional` **sizes**: `string`

Set of image source sizes

**`see`** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes

#### Defined in

[image.ts:22](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L22)

---

### src

• **src**: `string`

URl source for image (required)

#### Defined in

[image.ts:27](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L27)

---

### srcSet

• `Optional` **srcSet**: `string`

Possible image sources for the browser to use

**`see`** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset

#### Defined in

[image.ts:33](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L33)

## Methods

### onError

▸ `Optional` **onError**(`error`): `void`

Handles error events on image

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `error` | `string` \| `SyntheticEvent`<`HTMLImageElement`, `Event`\> |

#### Returns

`void`

#### Defined in

[image.ts:43](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L43)

---

### onLoad

▸ `Optional` **onLoad**(`event`): `void`

Handles loading event on image

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `event` | `SyntheticEvent`<`HTMLImageElement`, `Event`\> |

#### Returns

`void`

#### Defined in

[image.ts:38](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/image.ts#L38)
