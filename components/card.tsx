import { CalendarCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


interface CardProps {
    cardData: {
        id: number;
        logo: string;
        title: string;
        type: string;
        score: number;
        date: string;
        description: string;
    }
}

export default function Card({cardData}: CardProps) {
    return(
        <div>
            <div className='card p-6'>
                <div className='card-header'>
                    <Image
                      src={cardData.logo}
                      alt={`${cardData.title} Logo`}
                      width={50}
                      height={50}
                    />
                    <h3 className='title text-xl font-semibold py-5 line-clamp-1 overflow-hidden'>{cardData.title}</h3>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span><CalendarCheck size={20} strokeWidth={1.75} /></span>
                        <span>{cardData.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span><Sparkles size={20} strokeWidth={1.75} /></span>
                        <span>{cardData.score}/100</span>
                    </div>
                </div>
                <div className='card-body mb-6'>
                    <p className='description text-sm font-normal'>{cardData.description}</p>
                </div>
                <hr className="text-[#FAFAFA]"/>
                <div className='card-footer flex items-center justify-between pt-4'>
                  <div className="overflow-x-auto whitespace-nowrap">
                    <div className="flex gap-1">
                        <span><FaReact className="h-7 w-7 border border-white rounded-full p-1 text-[#61DBFB]"/></span>
                        <span><RiTailwindCssFill className="h-7 w-7 border border-white rounded-full p-1 text-[#61DBFB]"/></span>
                    </div>
                   </div>
                   <div>
                        <Button>View Interview</Button>
                   </div>
                </div>
            </div>
        </div>
    )
}