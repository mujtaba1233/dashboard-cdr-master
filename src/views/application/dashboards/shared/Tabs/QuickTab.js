import React from "react";
import { Button } from "react-bootstrap";
import { getLastDay, lastFifteenMinutes, lastFourYears, lastNinetyDays, lastOneHour, lastOneYear, lastSevenDays, lastThirtyDays, lastThirtyMinutes } from "../../utility/getTime";
import { useDispatch } from 'react-redux'
import { updateDate } from "../../slices/dateSlice";



export const QuickTab = ({ setDate }) => {
    const dispatch = useDispatch()

    const handleDate = (range) => {
        if (range === '15') {
            const date = lastFifteenMinutes()
            let data = {
                selectedDate: date,
                text: "Last 15 mins"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '30') {
            const date = lastThirtyMinutes()
            let data = {
                selectedDate: date,
                text: "Last 30 mins"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '1h') {
            const date = lastOneHour()
            let data = {
                selectedDate: date,
                text: "Last 1 hour"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '24h') {
            const date = getLastDay()
            let data = {
                selectedDate: date,
                text: "Last 24 hours"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '7d') {
            const date = lastSevenDays()
            let data = {
                selectedDate: date,
                text: "Last 7 days"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '30d') {
            const date = lastThirtyDays()
            let data = {
                selectedDate: date,
                text: "Last 30 days"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '90d') {
            const date = lastNinetyDays()
            let data = {
                selectedDate: date,
                text: "Last 90 days"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '1y') {
            const date = lastOneYear()
            let data = {
                selectedDate: date,
                text: "Last 1 year"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        } else if (range === '4y') {
            const date = lastFourYears()
            let data = {
                selectedDate: date,
                text: "Last 4 years"
            }
            dispatch(updateDate(data))
            setDate(data.text)
        }
    }

    return (
        <>
            <div className="my-4 d-flex justify-content-around">
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('15')}
                >
                    Last 15 min
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('30')}
                >
                    Last 30 min
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('1h')}
                >
                    Last 1 hour
                </Button>
            </div>
            <div className="my-4 d-flex justify-content-around">
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('24h')}
                >
                    Last 24 hours
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('7d')}
                >
                    Last 7 days
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('30d')}
                >
                    Last 30 days
                </Button>
            </div>
            <div className="my-4 d-flex justify-content-around">
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('90d')}
                >
                    Last 90 days
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('1y')}
                >
                    Last 1 year
                </Button>
                <Button
                    className="btn bg-transparant"
                    style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                    }}
                    onClick={() => handleDate('4y')}
                >
                    Last 4 years
                </Button>
            </div>
            {/* <div>
                <Button className="btn btn-block">Apply</Button>
            </div> */}
        </>
    );
};
