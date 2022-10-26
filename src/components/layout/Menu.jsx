import { PageContext } from "../../context/PageContext"
import { useContext } from "react"
export default function Menu(){
  const {setPage} = useContext(PageContext);
  const elements = ['Home','About', 'Stack', 'Say Hi'];
  const styles = 'text-white cursor-pointer font-bold mx-5 hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300';
    return(
      <div className="relative">
        <nav className="absolute my-10 flex sm:justify-end justify-center w-full">
          <ul className="flex">
            {
              elements.map(element => <li key={element} onClick={() => setPage(element)} className={styles}>{element}</li>)
            }
          </ul>
        </nav>
      </div>
    )
}