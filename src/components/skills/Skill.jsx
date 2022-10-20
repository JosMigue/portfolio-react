const Skill = ({name, icon, url, alt}) => {
    return (
      <a href={url} target="__blank" className="group lg:w-auto w-1/4"> 
        <img className=" group-hover:-translate-y-4 transform transition-all duration-100 ease-in mx-auto" loading="lazy" src={icon} alt={alt} width="40" height="40"></img>
        <p className="group-hover:visible lg:invisible visible font-bold text-white text-center text-sm">{name}</p>
      </a>
    )
}
export default Skill