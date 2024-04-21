import './GlowingCard.css'
export default function GlowingCard({ projectTitle, projectimg, projectdedcription }) {
    return <>
        <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle font-bold">{projectTitle}</div>
            <div className=' h-[200px] w-[200px] bg-red-500 z-40 ml-5 rounded-lg'>
                <img className=' rounded-lg w-full h-full' src={projectimg} />
            </div>
            <div className="mt-8 font-semibold text-white notibody line-clamp-3">{projectdedcription}</div>
        </div>
    </>
}