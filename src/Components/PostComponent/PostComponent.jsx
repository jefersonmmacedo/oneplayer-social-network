import "./postComponent.css";
import { HiPlusCircle } from "react-icons/hi";
import logo from "../../assets/images/user.png";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import { FaRegImages } from "react-icons/fa";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { ButtonUploadFiles } from "../ButtonUploadFiles/ButtonUploadFiles";
import { AreaUploadFiles } from "../AreaUploadFiles/AreaUploadFiles";
// import { LuCalendarClock } from "react-icons/lu";

export function PostComponent() {
    const [text, setText] = useState("")
    const [advanced, setAdvanced] = useState(false);
    const [uploadFiles, setUploadFiles] = useState(false);
    const [files, setFiles] = useState([]);
    const [survey, setSurvey] = useState([]);

    function handleAdvancedPost(e) {
        e.preventDefault();

        setAdvanced(!advanced)
    }

    function handleUploadFiles(e) {


        setUploadFiles(!uploadFiles)
    }


    function uploadFiles2(data) {
        console.log(data)
        setFiles(files.concat(data))
    }



    return (
        <div className="PostComponent">
            <div className="SimplePost">
            <img src={logo}alt="" />
            <textarea placeholder="O que deseja compatilhar hoje?" value={text} onChange={e => setText(e.target.value)}></textarea>
            {/* <input type="text" /> */}
            <HiPlusCircle onClick={handleAdvancedPost}/>

          
            </div>

            {
                advanced === true ?
            <div className="AdvancedPost">
                {/* <ButtonUploadFiles /> */}
               <FaRegImages onClick={handleUploadFiles}/>
               <AiOutlineFileGif />
               <MdFormatListBulletedAdd />
               <BsEmojiLaughing />
               {/* <LuCalendarClock/> */}
            </div>
            : ""
            }

            {uploadFiles === true ?
            <AreaUploadFiles uploadFiles2={uploadFiles2} idUser={"12011992"} idAccount={"12011992"} idPost={"12011992"} handleUploadFiles={handleUploadFiles}/>
            : ""}

            <div className="files">
                {
                    files.map((media) => {
                        return (
                            media.link?.includes(".png") || media.link?.includes(".jpg") || media.link?.includes(".jpeg") ?
                            <img src={media.link} alt="" />
                            :
                            <video src={media.link} controls></video>
                        )
                    })
                }
            </div>

            <div className="buttonPost">
            {text !== "" || files.length !== 0 ?
            <button> Publicar <BiSend /> </button> 
            
            : ""}
            </div>
        </div>
    )
}