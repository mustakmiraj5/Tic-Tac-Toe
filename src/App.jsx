import Board from "./components/Board";

export default function App(){
  return(
    <div className="w-[1000px] mx-auto">
    <h1 className="text-3xl ml-2 mb-4 mt-6 font-bold text-center">Tic Tac Toe</h1>
    <Board />
    </div>
  )
}