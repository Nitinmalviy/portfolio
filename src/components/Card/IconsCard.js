
export default function Card({ icon, iconName }) {
    return <>
        <div className="card flex justify-center items-center flex-col h-52 w-32 ">
            <img className='z-40 sm:{h-[8rem] w-[8rem]} h-[5rem] w-[5rem] ' src={icon} />
            <h3 className="text-white font-semibold mb-2">{iconName}</h3>
        </div>
    </>
}