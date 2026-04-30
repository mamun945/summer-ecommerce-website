import Image from "next/image"
import bannerImg from '../../public/banner2.png'


const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-[#d3999f]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="border basis-[50%]">
    <Image
    src={bannerImg} 
    alt="banner-logo"
    className="scale-110"
    ></Image>
    </div>
    <div className="basis-[50%]">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner
