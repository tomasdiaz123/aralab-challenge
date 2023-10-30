import img600 from "../../resources/img/FITOCLIMA 600 PH.png";
import img1200 from "../../resources/img/FITOCLIMA 1200 PLH.png";
import img300 from "../../resources/img/TESTA 300 -45ºC.jpg";
import temp from "../../resources/img/temp.png";
import hum from "../../resources/img/hum.png";
import "./chamber.css"

export default function Chamber(props) {
    let images = {
        "FITOCLIMA 600 PH": img600,
        "FITOCLIMA 1200 PLH": img1200,
        "TESTA 300 -45ºC": img300
    }
    return (
        <div className={"chamber"}>
            <div className={"chamberHeader"}>
                <div className={props.chamber.status === "online" ? "greenBall" : "redBall"}></div>
                <div className={"chamberInfoWrapper"}>
                    <p className={"name"}>{props.chamber.name}</p>
                    <p className={"type"}>{props.chamber.type}</p>
                </div>
            </div>
            <div className={"chamberImageWrapper"}>
                <img src={images[props.chamber.type]} className={"chamberImage"} alt={"chamberImage"}/>
            </div>
            <div className={"temp"}>
                <div className={"imageValueWrapper"}>
                    <img src={temp} height={22} width={15} alt={"temp"}/>
                    <p>{props.chamber.current_temperature.toFixed(1)}ºC</p>
                </div>
                <p className={"setValue"}>{props.chamber.set_temperature.toFixed(1)}ºC</p>
            </div>
            <div className={"hum"}>
                <div className={"imageValueWrapper"}>
                    <img src={hum} height={22} width={15} alt={"hum"}/>
                    <p>{props.chamber.current_humidity.toFixed(1)}%rH</p>
                </div>
                <p className={"setValue"}>{props.chamber.set_humidity ? props.chamber.set_humidity?.toFixed(1) + "%rH" : "OFF"}</p>
            </div>
        </div>
    );
}