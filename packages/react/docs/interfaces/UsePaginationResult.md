# Interface: UsePaginationResult

## Hierarchy

- `Required`<`BasePaginationProps`\>

  ↳ **`UsePaginationResult`**

## Properties

### currentPage

• **currentPage**: `number`

Index of the current page. (starting from 1)

#### Inherited from

Required.currentPage

#### Defined in

[pagination.ts:12](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L12)

---

### siblingCount

• **siblingCount**: `number`

The number of siblings on each side of current page.

#### Inherited from

Required.siblingCount

#### Defined in

[pagination.ts:22](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L22)

---

### totalPages

• **totalPages**: `number`

Total number of available pages.

#### Inherited from

Required.totalPages

#### Defined in

[pagination.ts:17](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L17)

## Methods

### onChange

▸ **onChange**(`newPageIndex`, `prevPageIndex`): `void`

Callback function triggered every time the page changes

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `newPageIndex`  | `number` |
| `prevPageIndex` | `number` |

#### Returns

`void`

#### Inherited from

Required.onChange

#### Defined in

[pagination.ts:37](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L37)

---

### onNext

▸ **onNext**(): `void`

Callback function triggered when the next-page button is pressed

#### Returns

`void`

#### Inherited from

Required.onNext

#### Defined in

[pagination.ts:27](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L27)

---

### onPrevious

▸ **onPrevious**(): `void`

Callback function triggered when the prev-page button is pressed

#### Returns

`void`

#### Inherited from

Required.onPrevious

#### Defined in

[pagination.ts:32](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/pagination.ts#L32)
