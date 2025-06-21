//route handler
//name of function in route handler should be http methods
export function GET(request){
    //return Response.json();
    return new Response('Hello world!');
}

//this might be helpful if we want to share the data to external client
//for example if we want to share the data to mobile application this might be helpful 