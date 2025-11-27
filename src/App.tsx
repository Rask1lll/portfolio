import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";
import LoadAnimation from "./components/LoadAnimation";

function App() {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);
  return (
    <body className="bg-[#0a001b]">
      {showLoading && <LoadAnimation />}
      <Header />
      <ProjectsContainer />
      <Footer />
    </body>
  );
}

export default App;
