export default function Section({title, children}){
  return(
     <div className="my-10 w-full">
      <h1 className="text-5xl font-bold text-white text-center py-2">{title}</h1>
      <div className="flex flex-row flex-wrap  justify-evenly my-5">
        {children}
      </div>
     </div> 
  )
}