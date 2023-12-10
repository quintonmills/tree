import Link from "next/link"

export default function LinkButton({linkName, link}){
    return(
        <div className="rounded-lg h-10 bg-slate-600 text-center text-sky-50" style={{ verticalAlign: "middle", lineHeight: "2.5rem", width: "50rem"}}>
            
            <Link href={link} className="w-full">{linkName}</Link>
        </div>
    );
}