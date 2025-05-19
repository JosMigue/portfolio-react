import { PageContext } from "../../context/PageContext"
import { useContext } from "react"
export default function Menu(){
  const stylesCss = {
    backgroundColor: `rgb(15, 23, 42)`
  }
  const {setPage, page} = useContext(PageContext);
  const elements = ['Home','About','Work experience','Stack', 'Say Hi'];
  const styles = 'text-white cursor-pointer font-bold mx-5 hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300';
    return(
      <>
        <nav className='my-auto flex sm:justify-end justify-center w-full' style={stylesCss}>
          <ul className="flex justify-center flex-wrap">
            {
              elements.map(element => <li key={element} onClick={() => setPage(element)}   className={`${styles} ${element === page ? 'active':''}`}>{element}</li>)
            }
          </ul>
        </nav>
      </>
    )
}