import "./areaUploadFiles.css";
import {v4 as uuidv4} from 'uuid';
import { UploadDropzone } from "@bytescale/upload-widget-react";


export const AreaUploadFiles = ({idUser, idAccount, idPost, uploadFiles2, handleUploadFiles}) => {

const options = {
  apiKey: "public_W142hX67PwCeWgQq4jxqKL5gQYu7", // This is your API key.
  maxFileCount: 10,
  showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (dhttps://www.bytescale.com/signin?returnTo=%2Fdashboard%2Ffilesefault).
  styles: {
    colors: {
      primary: "#F75900"
    }
  },
  locale: {
    "orDragDropFile": "...ou arraste e solte",
    "uploadFileBtn": "Adicionar fotos/videos",
    "orDragDropFileMulti": "...ou arraste e solte.",
    "uploadFileMultiBtn": "Adicionar fotos/videos",
    "finishBtn": "Ok",
    "addAnotherFileBtn": "Adicionar mais...",
    "addAnotherImageBtn": "Adicionar mais...",
  },
  path: {   // Each supports path variables (e.g. {ORIGINAL_FILE_EXT}). See your
    folderPath: `/uploads/oneplayer/posts/${idUser}/${idPost}`     // API key's config in the Upload Dashboard for all path variables.
   },
   editor: {
    images: {
      crop: false      // "rect" | "circ"
    }
  },
};

let list = []

return (

<UploadDropzone options={options}
                onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                onComplete={files => {      // Optional.
                  if (files.length === 0) {
                    console.log('No files selected.')
                  } else {
                    console.log('Files uploaded:');
                    console.log(files.map(f => f.fileUrl));
                    const data = files.map(f => f.fileUrl)
                    console.log(files);

                    files.forEach((doc) => {
                      const linkEdit = doc.fileUrl.includes(".png") || doc.fileUrl.includes(".jpg") || doc.fileUrl.includes(".gif") ? doc.fileUrl.replace("/raw/", "/suachave/") : doc.fileUrl.replace("/raw/", "/raw/")
                            const data = {
                              id: uuidv4(),
                              link: linkEdit,
                              }
                              
                              console.log(data)
                              list.push(data)
                            });
                             
                            
                            uploadFiles2(list)
                            handleUploadFiles()
                  }
                }}
                width="600px"
                height="300px" />
)

}