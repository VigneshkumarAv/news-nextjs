import { NextResponse } from "next/server";

export function middleware(request){
    console.log(request);
    
    return NextResponse.next();
}

export const config = {
    matcher: '/news'
}; // to match the exact request

//with the help of middleware we can handle different requests differently, to inspect all kinds of request
// and potentially also to redirect request depending on what we need to do in our app.