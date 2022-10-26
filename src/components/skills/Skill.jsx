const Skill = ({name, icon, url, alt}) => {
    return (
      <div>
        <a href={url} target="__blank" className="group lg:w-1/2 w-full m-auto"> 
          <img className=" group-hover:scale-125 transform transition-all duration-100 ease-in mx-auto" loading="lazy" src={icon} alt={alt} width="40" height="40"></img>
          <p className="font-bold text-white text-center text-sm">{name}</p>
        </a>
      </div>
    )
}
export default Skill