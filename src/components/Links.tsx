import { profileLinks } from "../constants";
import styles from '../style.module.css';


const Links = () => {
    return (

    /*<div>
       {profileLinks.map((profilelink) => (
        <div key={profilelink.title}>
            <p>
                {profilelink.title}
            </p>
        </div>
       ) )}
    </div>*/
    <div className={`px-24 ${styles.linkPadding}`}>
    <ul className="flex flex-col items-center py-8 mx-6">
        {profileLinks.map((lnk) =>(
            <li className=" w-[100%] text-center "
            key={lnk.id}>
                <a href={`${lnk.links}`}
                    id={lnk.id}
                    className={`font-medium text-gray-900 font-inter py-4 bg-gray-200 my-4 rounded w-[100%] block ${styles.linkHover}`}>
                    {lnk.title}
                </a>
            </li>
        ))}
    </ul>
    </div>
  )
        }
export default Links;


