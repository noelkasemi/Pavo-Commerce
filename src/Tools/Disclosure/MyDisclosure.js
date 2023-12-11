import { Disclosure, ChevronUpIcon } from "../../Page/Partials/Imports";
import Disclose from "./Disclose"

export default function MyDisclosure({
  panelStyle,
  children,
  children2,
  buttonChildren,
  buttonChildren2,
  buttonStyle,
}) {  
  // panelStyle - prop for styling the Disclosure Panel
  // children -  prop for adding children/text to the Disclosure Panel
  // buttonChildren - prop for adding text to the button
  // buttonStyle - prop for styling the Disclosure Button
  return (
    <section className="w-full">
      <section className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclose text={children} btn={buttonChildren} btnStyle={buttonStyle} panelStyle={panelStyle} />
        <Disclose text={children2} btn={buttonChildren2} btnStyle={buttonStyle} panelStyle={panelStyle} />
      </section>
    </section>
  );
}
