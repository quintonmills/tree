import Image from "next/image";

export default function ProfilePic(){
    return(
        <div className="rounded-full">
            <Image src="/tree/public/pp.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
            /> 
        </div>
    );
}