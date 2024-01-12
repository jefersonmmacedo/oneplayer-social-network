import { HiCheckBadge } from "react-icons/hi2"
import "./profileComponent.css"
import { SlOptionsVertical } from "react-icons/sl"
import { CiSaveDown2 } from "react-icons/ci"

export function ProfileComponent({avatar, name, username, verified, idPost, live}) {
    
    return (
        <div className="ProfileComponent">
            <div className="imageName">
                <img src={avatar} alt="" />
                    <div className="username">
                <h5>{name}</h5>
                <h6>{username}</h6>

                    </div>

                <HiCheckBadge />
                <button>Seguir</button>
                {live === true ? 
                <button className="btn2">Ao vivo</button>
                : ""}
                
            </div>

            <div className="info">
                <h6>12h</h6>
                <SlOptionsVertical />
            </div>
        </div>
    )
}

