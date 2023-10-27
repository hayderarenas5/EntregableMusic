import { useEffect } from "react"
import { axiosMusic } from "../utils/configAxios"
import { PlaylistIcon, SearchIcon } from "../components/icons/Svgs"

const Home = () => {

  useEffect(()=>{
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton,reggae")
      .then(({data})=>console.log(data))
      .catch((err)=>console.log(err))
  },[])

  return (
    <section className="bg-dark text-white font-urbanist h-screen grid bg-[url(/images/bg-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/images/bg-desktop.png)] transition-all grid-rows-[auto_1fr]">
      <header className="bg-primary-dark flex justify-between p-3 px-4 uppercase items-center">
        <h1 className="font-semibold text-lg">Gift Music</h1>

        <div className="flex gap-2">

          <button className="uppercase p-2 px-4 border border-secondary rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">Mi cuenta</button>
          <button className="uppercase p-2 px-3 border border-secondary rounded-full font-semibold hover:bg-primary-light transition-all flex items-center gap-2"><PlaylistIcon /><span className="hidden sm:inline">Grabando 1</span></button>
        </div>
      </header>
      <section className="pt-14 px-4">
        <main className="w-[min(550px,_100%)] mx-auto bg-primary-dark py-8 px-6 sm:px-20 rounded-3xl">
          <form className="bg-white/20 p-1 px-3 rounded-md flex items-center gap-4">
            <button>
              <SearchIcon />
            </button>
            <input className="bg-transparent outline-none flex-1" placeholder="Buscar" type="text" size={5}/>
            <select className="bg-transparent outline-none">
              <option value="">1</option>
            </select>
          </form>
        </main>
      </section>
    </section>
  )
}

export default Home
