import React from 'react'

export const PublishedDate = ({ time }) => {

    const isoTime = time.replace(" ", "T").replace("Z", "");
    const date = new Date(isoTime);
    const options = { timeZone: "Asia/Kolkata", hour: "numeric", hour12: true, hourCycle: "h12", year: "numeric", month: "2-digit", day: "2-digit", minute: "2-digit" };

    const formattedDate = date.toLocaleString("en-IN", options);

    return (
        <>
            {formattedDate}
        </>
    )
}


export const AgoTime = ({ Time }) => {

    function timeAgo(datePublished, referenceDate) {
        const publishedTime = new Date(datePublished).getTime();
        const referenceTime = new Date(referenceDate).getTime();
        const elapsed = referenceTime - publishedTime;

        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        }
    }

    const isoTime = Time.replace(" ", "T").replace("Z", "");
    const timeElapsed = timeAgo(isoTime, new Date());

    return (

        <>
            <b>{timeElapsed}</b>
        </>
    )
}