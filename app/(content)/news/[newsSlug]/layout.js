export default function NewsLayout({children, modal}){
    return <>
    {modal}
    {children}
    </>
}

//route group for having different layouts for different pages