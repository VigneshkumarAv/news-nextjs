"use client"; //error.js is always a client component

export default function FilterError({error}){
    return <div id="error">
        <h2>An error occured!</h2>
        <p>{error.message}</p>
    </div>
}