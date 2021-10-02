import style from "./LeftBar.module.css"
import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
export default function LeftBar({ isHidden, setHidden, border }) {
  const [files, setFiles] = useState([])

  let { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {

      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  });

  const logo = files.map(file => (
    <img style={{ width: "150px", border: "2px solid #007C89" }} src={file.preview} alt="" />
  ))


  useEffect(() => () => {
    setHidden({ display: "none" })
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])



  return (
    <div className={style.main}>

      <div className={style.top}>
        <div className={style.logo}>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p> <img style={isHidden} className={style.logoImg} src='./BlocksTabImages/leftLogo.png' alt="Logo" />
              {logo}</p>
          </div>
        </div>
        <div contentEditable={true} className={style.header}>Showcase your products.</div>
      </div>


      <div className={style.body}>
        <div className={style.mainImg}><img style={border} src="./BlocksTabImages/mainImg.png" alt="Logo" /></div>
        <div contentEditable={true} className={style.feature}>Feature the star of your collection first.</div>
        <div contentEditable={true} className={style.text}>Then, describe what makes your product unique, useful, or gift worthy. Be sure
          to highlight the main features, and let people know where it’s available.</div>
        <div className={style.button}> <span>Start Shopping</span> </div>
      </div>

      <div className={style.footer}>
        <img src="./BlocksTabImages/footer.png" alt="Logo" /></div>
    </div>
  )
}