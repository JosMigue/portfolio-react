const Skill = ({name, icon, url, alt}) => {
    return (
      <div>
        <a href={url} target="__blank" className="group w-full m-2 p-4 bg-[#6666662b] rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center"> 
          <img className=" group-hover:scale-125 transform transition-all duration-100 ease-in mx-auto" loading="lazy" src={icon} alt={alt} width="40" height="40"></img>
          <p className="group-hover:skew-6 transform transition-all duration-100 ease-in font-bold text-white text-center text-sm">{name}</p>
        </a>
      </div>
    )
}
export default Skill