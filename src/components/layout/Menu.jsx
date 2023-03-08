import { PageContext } from "../../context/PageContext"
import { useContext } from "react"
export default function Menu(){
  const stylesCss = {
    backgroundColor: `rgb(15, 23, 42)`
  }
  const {setPage} = useContext(PageContext);
  const elements = ['Home','About','Work experience','Stack', 'Say Hi'];
  const styles = 'text-white cursor-pointer font-bold mx-5 hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300';
    return(
      <>
        <nav className='lg:absolute relative lg:my-10 my-0 py-2 flex sm:justify-end justify-center w-full' style={stylesCss}>
          <ul className="flex justify-center flex-wrap">
            {
              elements.map(element => <li key={element} onClick={() => setPage(element)} className={styles}>{element}</li>)
            }
          </ul>
        </nav>
      </>
    )
}