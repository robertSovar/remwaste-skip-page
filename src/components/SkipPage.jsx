import { useState } from "react";
import SkipSelector from "../pages/SkipSelector";
import Footer from "../components/Footer";

const SkipPage = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <>
      <SkipSelector onSelect={setSelectedSkip} />
      {selectedSkip && <Footer selectedSkip={selectedSkip} />}
    </>
  );
};

export default SkipPage;
