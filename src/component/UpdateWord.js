import {useRef, useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function UpdateWord() {

    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const Params = useFetch(`http://localhost:3001/words/${useParams().id}`);
    const [isLoading, setIsLoading] = useState(false);

    const engRef = useRef(Params.eng);
    const korRef = useRef(Params.kor);
    const dayRef = useRef(Params.day);

    useEffect(() => {
        if (Params) {
            dayRef.current.value = Params.day;
            engRef.current.value = Params.eng;
            korRef.current.value = Params.kor;
        }
    });


    function onSubmit(e) {
        e.preventDefault();

        if(!isLoading) {
            setIsLoading(true);

            fetch(`http://localhost:3001/words/${Params.id}`,{
                method: "PUT",
                header: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: Params.isDone,
                })
            })
            .then(res => {
                if(res.ok) {
                    alert("수정이 완료되었습니다.");
                    navigate(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="hidden"/>
            <div className="input_area">
                <label>ENG</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>KOR</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))};
                </select>
            </div>
            <button style={{ opacity: isLoading? 0.3 : 1}}>{isLoading? "Saving..." : "저장"}</button>
        </form>
    );
};