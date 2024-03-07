import "./buttonUploadFiles.css"
import { UploadButton } from "@bytescale/upload-widget-react";
import { FaRegImages } from "react-icons/fa";

// -----
// Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
// -----
const options = {
  apiKey: "public_W142hX67PwCeWgQq4jxqKL5gQYu7", // This is your API key.
  maxFileCount: 1,
  maxFileSizeBytes: 10485760,
  locale: {
    "orDragDropFile": "...ou arraste e solte suas fotos ou vídeo",
    "uploadFileBtn": "Carregue suas fotos ou vídeo",
  }
};

export const ButtonUploadFiles = () => (
  <UploadButton options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        <FaRegImages />
      </button>
    }
  </UploadButton>
)