import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <>
      <h1 className="text-3xl xs:text-[16px] sm:text-[40px] font-bold underline font-baloo">
        Hello world!
      </h1>
      <FontAwesomeIcon icon={faCoffee} />
    </>
  );
}
