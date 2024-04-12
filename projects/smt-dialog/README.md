# SMT Dialog Component

The SMT Dialog Component is an Angular component that provides a customizable modal dialog for your Angular applications.

## Installation

You can install the SMT Dialog Component via npm:

```
npm i smt-dialog
```

## Usage

### Import the module

In your Angular module, import the `SMTDialogModule`:

```typescript
import { SMTDialogModule } from "smt-dialog";

@NgModule({
  declarations: [AppComponent],
  imports: [SMTDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Use the component

In your Angular component template, use the smt-dialog component like this:

```html
<smt-dialog [isOpen]="modalOpen" (closeModal)="modalOpen = false" [buttons]="modalButtons" [modalStyle]="{ width: '50%' }" title="Sample Modal Title">
  <!-- Modal content goes here -->
</smt-dialog>
```

### Inputs

- `isOpen`: Boolean value to control the visibility of the modal.
- `closeButton`: Boolean value to show or hide the close button in the modal header.
- `buttons`: An array of objects representing the buttons to be displayed in the modal footer.
- `modalStyle`: An object containing CSS styles to customize the modal's appearance.
- `title`: The title of the modal.

### Outputs

- `closeModal`: Event emitter that emits an event when the modal is closed.

## Examples

You can find usage examples in the example directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this template according to the specific features and usage of your `smt-dialog` component. Additionally, you may want to include information about any additional configuration options, customization options, or advanced features that your component provides.
