import LinkButton from "./components/LinkButton"
import ProfilePic from "./components/ProfilePic"
import Bio from "./components/Bio"
import Name from "./components/Name"

export default function Home() {
  return (
    <div 
    className="h-screen"
    style={{
      backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/4/4e/A_lonesome_palmtree_at_the_beach_-_Sunset_in_Mojácar_-_panoramio.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className="h-screen w-full flex flex-col items-center p-20">
        <div> {/* This handles profile picture */}
          <ProfilePic></ProfilePic>
        </div>
        <div>{/* This handles the Name */}
          <Name></Name>
        </div>
        <div> {/* This handles the Bio */}
          <Bio></Bio>
        </div>
        <div className="flex flex-col justify-around h-64"> {/* This Handles all the Links */}
        
          <LinkButton link={"https://www.youtube.com/"} linkName={"Youtube"}></LinkButton>
          <LinkButton link={"https://www.reddit.com/"} linkName={"Reddit"}></LinkButton>
          <LinkButton link={"https://www.instagram.com/"} linkName={"Instagram"}></LinkButton>
          <LinkButton link={"https://www.tiktok.com/"} linkName={"TikTok"}></LinkButton>
        </div>
      </div>
    </div>
  )
}


{/* <Image
src= https://upload.wikimedia.org/wikipedia/commons/1/17/Praveen_Das.jpg
width={500}
height={500}
alt="Picture of the author"
/> */}