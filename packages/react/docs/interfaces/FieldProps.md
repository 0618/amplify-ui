# Interface: FieldProps

Shared type across all field types

## Hierarchy

- **`FieldProps`**

  ↳ [`CheckboxFieldProps`](CheckboxFieldProps.md)

  ↳ [`RadioGroupFieldProps`](RadioGroupFieldProps.md)

  ↳ [`SelectFieldProps`](SelectFieldProps.md)

  ↳ [`SwitchFieldProps`](SwitchFieldProps.md)

  ↳ [`TextAreaFieldProps`](TextAreaFieldProps.md)

  ↳ [`TextFieldOptions`](TextFieldOptions.md)

## Properties

### descriptiveText

• `Optional` **descriptiveText**: `ReactNode`

Provides additional information needed to fill field
(e.g. password requirements, etc.)

#### Defined in

[field.ts:13](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L13)

---

### errorMessage

• `Optional` **errorMessage**: `string`

When defined and `hasError` is true, show error message

#### Defined in

[field.ts:18](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L18)

---

### label

• **label**: `ReactNode`

Label text for field (required)

#### Defined in

[field.ts:23](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L23)

---

### labelHidden

• `Optional` **labelHidden**: `boolean`

Visually hide label (not recommended in most cases)

**`default`** false

#### Defined in

[field.ts:29](https://github.com/aws-amplify/amplify-ui/blob/932629520/packages/react/src/primitives/types/field.ts#L29)
