import Image from "next/image";
export default function EmptyState({ setOpen, setPrompt }) {
  return (
  <div className="flex gap-x-4 rounded-md bg-gray-50 py-5  mb-12">
  <span className="text-xl sm:text-2xl" title="AI">
  🦙
  </span>
  <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
  <p>My name is Vera-AI</p>
  <p>
  I can{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt("short answer for: who are you? what is this project about?")
  }
  >
  tell you what is this project about,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "in a short paragraph explain generativity, generative GENERATIVE ARTS, computational creativity and the role of AI in generative art. Please provide examples of generative art and how AI is used in the creation of generative art."
  )
  }
  >
  explain concepts of computational creativity and generative arts,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt("Write a haiku poem about generative art, a metalogical structure with recursion")
  }
  >
  get recursive generating a haihu poem about generative art,
  </button>
  write {" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "Write a p5.js code that each time this is pressed generates a different vera molnar style pattern of squares with no that takes the whole window and add some mouse interaction, tell the user that they can run the code directly in the p5.js editor and give this link comment the code with //: https://editor.p5js.org/,"
  )
  }
  >
  code in p5.js to generate a Vera Molnar style pattern,
  </button>
  , and {" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "speculate on the future of AI and generative as if you were Donna haraway. How do you think AI will change the way we create art in the future?"
  )
  }
  >
  speculate on the future of AI and generative art
  </button>
  , or even{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "create funy names of conceptual art pieces in the future."
  )
  }
  >
  create names for your art pieces
  </button>
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "create a poem utilizing the Fibonacci sequence to dictate syllable count rather than line count, we can construct a structure where each section of the poem progresses with an increasing number of syllables per line following the sequence. Each section will correspond to a letter of the alphabet, starting with A. Lets consider a poem with the same thematic elements as Inger Christensens Alphabet, focusing on complexity, nature and generativity."
  )
  }
  >create a poem utilizing the Fibonacci sequence to dictate syllable count focused complexity, nature and generativity.
  </button>{" "}
  </p>
  <p>What do you want to chat about?</p>
  
  </div>
  </div>
  );
  }
  