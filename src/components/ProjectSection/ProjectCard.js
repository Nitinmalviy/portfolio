import zerowaste from '../icons/images.jpeg';
import './Card.css';
export default function ProjectCard() {
    return <>
        <div class="card1">
            <div className="card-info overflow-hidden">
                <p className="">
                    <img className="rounded-md " src={zerowaste} />
                    <div className="flex justify-between items-center p-2">
                    </div>
                </p>
            </div>
        </div>
    </>
}