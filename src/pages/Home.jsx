import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="bg-white w-[270px] sm:w-[400px] md:w-[900px] mx-auto border-r-8 border-secondary font-semibold">
        <div className="flex justify-center py-6">
            <img className="rounded-full" src="/images/foto.jpg" alt="" />
        </div>
        <div className="grid gap-3 text-center px-2">
            <p className="font-semibold text-2xl">Hola, soy Hayder tecnólogo en programación</p>
            <p className="md:w-[500px] md:mx-auto pt-3">Soy una persona muy dedicada que cumple con las labores y requerimientos que se le
            exigen, honesta, sincera, responsable, pro activa, capaz de ejercer las labores que me
            sean asignadas...</p>
            <a href="/documents/HDVHayderArenas1.pdf" download><button className="bg-secondary text-white p-2 rounded-md mx-auto">descargar documento</button></a>
        </div>
        <div className="w-[270px] bg-[#EDF7FA] h-[150px]">
            <div className="flex items-center p-3 justify-around"> 
                <h3 className="text-center font-normal">Experiencias</h3>
                <Link to="/blog" className="text-secondary hover:underline">Ver todos</Link>
            </div>
            <div>
                <div className="text-center grid gap-2">
                    <h1 className="font-bold px-6">Conocimientos básicos en media técnica</h1>
                    <p>07  Jun  2020 | IE.Playa Rica</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default Home
