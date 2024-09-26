import {useState} from "react";
import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import Word from "./Word";

export default function Day() {
    const [day, setDay] = useState(useParams().day);
    const days = useFetch("http://localhost:3001/days");

    function toggleMove(move) {
        let newDay = Number(day);

        if (move === "prev") {
            if (newDay === 1) alert("첫번쨰 페이지입니다.");
            else setDay(newDay-1);
        } else {
            if (newDay === days.length) alert("마지막 페이지입니다.");
            else setDay(newDay+1);
        }
    }

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => toggleMove("prev")}>PREV</button>
                <h2>Day {day}</h2>
                <button onClick={() => toggleMove("next")}>NEXT</button>
            </div>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map((word) => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
};