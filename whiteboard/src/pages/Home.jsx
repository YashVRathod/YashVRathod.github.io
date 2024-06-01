import HeroSection from "./HeroSection";

function Home(){

  const data = {
    name:"Welcome to NoteMaster",
    image:"./images/hero-image.png"
  }
  return( 
    <HeroSection {...data}/>
  );
}

export default Home