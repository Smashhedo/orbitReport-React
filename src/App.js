import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./Banner";
import useState from "react";
import satData from "./satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
    
}
    const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  return (
    <div>
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
      <Banner />
    </div>
  )};

export default App;
