import './App.css';
import chambersRaw from "./resources/chambers.json"
import Chamber from "./components/chamber";
import {useState} from "react";
import lupa from "./resources/img/lupa.png"

function App() {
    const [chambers, setChambers] = useState(chambersRaw);
    const [TextValue, setTextValue] = useState("");

    function searchChamber() {
        if (chambers === "chambers")
            setChambers(chambersRaw)
        else {
            setChambers(chambersRaw.filter((chamber) => {
                return chamber.name.toLowerCase().includes(TextValue.toLowerCase().trim())
            }))
        }
    }

    return (<>
            <div>
                <div className={"header"}>
                    <div className={"title"}>
                        <p>My Chambers</p>
                    </div>
                    <div className={"searchBar"}>
                        <img onClick={searchChamber} src={lupa} height={15} width={15} alt={"lupa"}/>
                        <input className={"hiddenInput"} type={"text"} placeholder={"Search"} value={TextValue}
                               onKeyDown={(e) => {
                                   if (e.key === "Enter") {
                                       searchChamber()
                                   }
                               }
                               }
                               onChange={(e) => setTextValue(e.target.value)}/>
                    </div>
                </div>
                <div className={"content"}>
                    <div className={"chamberList"}>
                        {chambers.map((chamber, index) =>
                            <Chamber chamber={chamber} key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
