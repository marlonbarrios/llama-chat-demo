import CTAGooBG from "../../public/molnar.png";

export default function CallToAction() {
  // todo: make this real goo
  return (
    <div
      className="guide-footer-cta sm:flex items-center bg-pink-600 justify-between p-12 space-y-4"
      style={{
        background: `url(${CTAGooBG.src}) no-repeat center center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div >
        <h1 className="text-2xl sm:text-4xt px-2 text-white bg-orange-400 font-bold">
          Vera-AI | on computational creativity, generative arts and AI
        </h1>
        <p className="text-white mx-auto mt-2 px-2 bg-orange-500 font-bold sm:mt-0">
         conversational AI powered by Replicate running Llama Models
        </p>
        <p className="text-white mx-auto mt-2 px-2 bg-orange-600 font-bold sm:mt-0">
          created by<a
        className=" text-white text-small inline-block px-1 py-1 flex-none"
        href="https://marlonbarrios.github.io/">carlon barrios solano</a> for the AI+ART+LAB | <a
        className=" text-white text-small inline-block px-1 py-1 flex-none"
        href="https://radiona.org/">Radiona</a>
        </p>
      </div>
      <a
        className="bg-gray-500 rounded-md  text-white text-small inline-block px-5 py-3 flex-none no-underline"
        href="https://replicate.com/blog/run-llama-3-with-an-api?utm_source=project&utm_campaign=llama2ai"
      >
        Get started on Replicate AI&rarr;
      </a>
    </div>
  );
}
