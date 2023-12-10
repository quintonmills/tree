import Link from "next/link"

export default function LinkButton({linkName, link}){
    return(
        
            <Link href={link} >
                <div className="rounded-lg h-12 bg-slate-600 text-center text-sky-50" style={{ verticalAlign: "middle", lineHeight: "2.5rem", width: "50rem"}}>
                    {linkName}
                </div>
            </Link>
        
    );
}