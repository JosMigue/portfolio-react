import {MainSection} from './layout/MainSection'
export default function Contact(){
    return(
        <MainSection>
            <div >
                <h1 className="text-5xl font-bold text-white text-center my-2">Get In Touch</h1>
                <p className="text-gray-300 text-center my-2">I’m not currently looking for new opportunities, but my inbox is always open. You can send me an email and I will response back ASAP!</p>
                <div className="flex justify-center">
                    <a href="mailto:Jose_Galvan20_97@hotmail.com" className="my-4 py-4 px-4 bg-transparent border border-green-400 rounded-md text-green-400 font-bold hover:animate-pulse">Say Hi 👋🏻</a>
                </div>
            </div>
        </MainSection>
    )
}