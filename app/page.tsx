import HeroSection from "./component/HeroSection";
import HorizontalScroll from "./component/ScrollSnap";
import InfiniteTechStack from "./component/IfinteTechStack";
import constants from "./constants";

import InfinteTitle from "./component/InfinteTitle";
import MaxWidthWrapper from "./component/MaxWidthWrapper";
import OverlappingSlider from "./component/Overlapslider";
import AboutMe from "./component/AboutMe";
import Hero2 from "./component/Hero2";
const { projects, projects2, SERVICES, TECH, animationProjcets2 } = constants;
/*
hero section
tech stack
email
array of projects 
slider optimization
logo
 */
export default function Home() {
  return (
    <section>
      {/*  رقم 1 ده سكشن البداية 
      videoFallbackSrc الصورة الي هتظهر مكان الفيديو لو النت ضعيف او الفيديو مش متوفر 
      title , subtitle buttonText  ال 3 تحت بعض 
      mediaSrc مكان الفيديو 
      video :
      انسخ الكود ده 
            <HeroSection
        videoFallbackSrc="/hell-foto.png.webp"
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/hell.mp4"
        mediaType="video"
      />
      نهاية سكشن الفيديو

      fullImage:
           لصورة كاملة بدل الفيديو انسخ الكود ده 
           <HeroSection
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/palestine1.png"
        mediaType="image"
      />
            نهاية سكشن الصورة

      imagePart:
                 لصورة واخده جزء بس  بدل الفيديو انسخ الكود ده 

     <HeroSection
        title="Hey my name is noor"
        subtitle="i am backend developer"
        buttonText="Contact use"
        mediaSrc="/palestine1.png"
        mediaType="image"
        full={false}
        mediaPosition="left"
      />
                  نهاية سكشن الصورة التاني

      */}
      <HeroSection
        videoFallbackSrc="/hell-foto.png.webp"
        title="Hey my name is Hagar Hagag"
        subtitle="i am frontend developer"
        buttonText="Contact me"
        mediaSrc="/hell.mp4"
        mediaType="video"
      />
      {/*  رقم 2 ده سكشن البداية  */}

      <img src="/service-line.png" alt="" />
      <HorizontalScroll
        paragraph="i am frontend web developer and i love creating interactive websites "
        items={SERVICES}
      />
      <img src="/service-line.png" alt="" />
      {/*  حدد العنوان وتقدر تكنسل الانيمشن لو كتبت  cancelAnimation  */}

      {/* ده سكشن اضافه المشاريع 
      types 
      بتاخد اوبجكيت 
      {}
      جواه حاجتين
      category  المشاريع دي 
      items المشاريع نفسها
      slidesPerView: في كم سلايد ظاهره في المره الاحده 
      height طول الصورة
      autoplay هل يشتغل بشكل تلقائي ولالا
      loop عاوزه يفضل يلوب لما يخلص ويتعاد من الاول ولالا 
      بو اه سيبه لو مشعاوز اعمل 
      loop={false} او autoplay={false}
      */}
      <OverlappingSlider
        slidesPerView={2}
        height={" h-44"}
        types={[
          {
            category: "projects",
            items: projects,
          },
        ]}
        title="My projects"
      />
      <img src="/service-line.png" alt="" />

      {/* ده سكشن أنا مين  */}

      <AboutMe
        name="Hagar"
        img="/HagarHagag.jpeg"
        height=" h-64 lg:h-96"
        text="Hey! I'm a frontend developer who loves turning ideas into visually striking, interactive experiences .I have a thing for color, visual details, and playful interactions .
 
             My toolkit currently revolves around HTML, CSS, and JavaScript, and I'm constantly expanding it as I explore new technologies and approaches to frontend development . With every project, I'm aiming to turn an idea into something polished, purposeful, and genuinely enjoyable to interact with. "
      />
    </section>
  );
}
