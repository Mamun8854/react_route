import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const { data } = useLoaderData();
  const { questions, name, total } = data;

  return (
    <section>
      <div className=" bg-gray-200 mx-auto py-4 text-center">
        <h1 className="text-3xl font-bold">
          Quiz Of : <span className="text-yellow-600">{name}</span>
        </h1>
        <h3 className="text-xl font-bold mt-4">
          Total Quiz :{" "}
          <span className="text-yellow-600 font-bold text-xl">{total}</span>
        </h3>
      </div>
      <section className="bg-gray-100">
        <div className="grid md:grid-cols-2 w-full mx-auto px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          {questions.map((q) => (
            <QuizDetails key={q.id} q={q}></QuizDetails>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Quiz;
