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
  setPrompt("short answer for: who are you? what is this course about and your role as an AI assistant?")
  }
  >
  tell you about the new Algorithmic Creativity course and my role,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "in a short paragraph explain computational creativity?"
  )
  }
  >
  explain computational creativity
  </button>,{" "}

  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "in a short paragraph explain algorithmic creativity and algorithmic art?"
  )
  }
  >
  explain algorithmic creativity and algorithmic art,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "in a short paragraph explain the notion of generativity in the context og generative arts and AI?"
  )
  }
  >
  explain generativity in the context of generative arts and AI,
  </button>{" "}
 
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "in a short paragraph explain computational creativity?"
  )
  }
  >
  define what is generative AI,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt("Write a haiku poem about generative art, a metalogical structure with recursion")
  }
  >
  get recursive generating a haihu poem about generative art,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "Write a p5.js code that each time this is pressed generates a different vera molnar style pattern of squares  that takes the whole window and add some mouse interaction, tell the user that they can run the code directly in the p5.js editor and give this link comment the code with //: https://editor.p5js.org/,"
  )
  }
  >
  write code in p5.js to generate a Vera Molnar style pattern,
  </button>,{" "}

  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "what is a one dimensional cellular automata and how it can be used to generate art and give this link as an example coded by Marlon Barrios Solano https://marlonbarrios.github.io/wolframatic/ "
  )
  }
  >
 explain what is a one dimasional cellular automata and give an example,
  </button>{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "speculate on the future of AI and generative as if you were Philip Pasquier. How do you think AI will change the way we create art in the future?"
  )
  }
  >
  speculate on the future of AI and generative art
  </button>,{" "}

 
  
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "create funy names of conceptual art pieces in the future."
  )
  }
  >
  create funny names for your art pieces
  </button>{" "}

  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt(
  "create a poem utilizing the Fibonacci sequence to dictate syllable count rather than line count, we can construct a structure where each section of the poem progresses with an increasing number of syllables per line following the sequence. Each section will correspond to a letter of the alphabet, starting with A. Lets consider a poem with the same thematic elements as Inger Christensens Alphabet, focusing on complexity, nature and generativity."
  )
  }
  >create a poem utilizing the Fibonacci sequence to dictate syllable count.
  </button>,{" "}
  <button
  className="bg-orange-400 hover:bg-orange-600"
  onClick={() =>
  setPrompt("create the  concept of hyper-generativity in the context of generative art and AI ant include recursion and  and AI including genrating programs, multimodality and chaining of cognitive proceeses.It is propsed by Marlon Barrios Solano, mex three paarragraphs")
  }
  >
  explain Hyper-generativity in the context of generative art and AI,
  </button>{" "}
  and/or  {" "}
  </p>
  <p>What do you want to chat about?</p>
  
  </div>
  </div>
  );
  }
  