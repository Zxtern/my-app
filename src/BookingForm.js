import React, { useState } from "react";

function BookingForm() {
    /*The logic */
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "21:00", "22:00"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Api
        console.log({date, time, guests, occasion});
    }


    /*The layout (visuals) */
    return (
        <div className="booking-form">
            <form className="form"style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Reserve Now" />
            </form>
        </div>
    );
}

export default BookingForm;
