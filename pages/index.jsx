import Link from "next/link";
import Firm from "../components/firm/Firm.jsx";
import Header from "../components/header/Header.jsx";



export default function IndexPage() {
  return (
    <main className="h-screen">
      <Header title="Home | Trivia Challenge" />
      <div className="grid grid-rows-4 gap-5 h-full mx-10 py-10 text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl  text-indigo-700 font-bold">Welcome to the Trivia Challenge!</h1>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-2xl text-gray-700">You will be presented with 10 True or False questions.</h2>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-2xl text-gray-700">Can you score 100%?</h2>
        </div>
        <div className="flex items-center justify-center">
          <Link className="w-full" href="/quiz"><a className="btn-purple">Begin</a></Link>
        </div>
      </div>
      <Firm/>

    </main>
  )
}
