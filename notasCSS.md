**NOTAS CSS**

**Cascade**

- Specificity:
Inline styles have the highest specificity.
IDs (#) have higher specificity than classes (.).
Elements and pseudo-elements have lower specificity.
Adding !important to a rule makes it highest priority.

- The last rule defined takes precedence if specificity is equal.
- Styles defined later in the stylesheet override previous styles.

- Origin of Styles:
User Agent Stylesheets: Default browser styles.
Author Stylesheets: Styles defined in your CSS.
User Stylesheets: Styles applied by users.

- Some properties are inherited by child elements, like font or color.

- < !important > Inline Styles > IDs > Classes/Attributes > Elements.
The more specific selector wins.



**Pseudo-Clases**

:autofill

- Note: The user agent style sheets of many browsers use !important in their :-webkit-autofill style declarations, making them non-overridable. For the best browser compatibility use both :-webkit-autofill and :autofill.
*Extracted from: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill)*

- CSS Float Layouts are deprecated the current standards are CSS grid layout and CSS flexbox

- Existe valid e invalid para los input desde CSS

- UI or User Interface is the visual representation of a digital
product. Its obvious use cases are apps and websites.

- UX or User Experience de"nes and studies how easy it is to
use the product.

- CX or Customer Experience is o#en confused as being another
name for UX. The truth is that CX is a top-level process that
de"nes not only how your product works, but how your entire
company operates.

**Box Sizing**

- Applying box-sizing: border-box lo que hace es que cuando se refiere al height y al width, lo que hace es que coge content, padding y border y deja suelto el margin, por eso se le llama content-box (por que agarra solo el content) y border-box (donde la caja se cuenta desde el border)
- Esto se aplica cuando se le da un height y un width al elemento entonces la forma en que se calcula esto es donde cambia si es content-box o box-sizing

**Especificity and cascade**

- Check the chapter 1 of the book CSS in Deep the manning publications, including specificity notation like 1,1,0


