import {ReactNode} from "react";

type SectionProps={
    title?:string,
    children: ReactNode
}
export const Section=({children,title="My Subheading"}: SectionProps)=>{
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}



// THE OLD WAY
// const Section:React.FC<{title:string}> =({children,title})=>{
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }