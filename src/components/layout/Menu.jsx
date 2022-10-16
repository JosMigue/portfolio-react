export default function Menu(){
  const elements = ['About', 'Stack', 'Contact'];
  const styles = 'text-white font-bold mx-5 hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300';
    return(
      <div className="relative">
        <nav className="lg:absolute inherit my-10 flex justify-end w-full">
          <ul className="flex">
            {
              elements.map(element => <li className={styles}>{element}</li>)
            }
          </ul>
        </nav>
      </div>
    )
}