import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Write = () => {
  return (
    <div>
   <br/><br/>
      <div className='Write-wraper'>
      <div className="content">
      <input type="text" placeholder='Title'  />
      
      <div className="editorContainer">
      <ReactQuill className='editor' theme="snow"  />
      </div>
     </div>

     <div className="menu">
     {/* <div className="item">
      <h1>Publish </h1>
      <span>
        <b>Status:</b> Draft
      </span>
      <span>
        <b>Status:</b> public
      </span>
      <input style={{display:"none"}} type="file" id='file'  />
      <label className='file' htmlFor="file">Upload Image</label>
      <div className="buttons">

        <button>Save as a draft</button>
        <button >Publish</button>
      </div>

     </div> */}
     <div className="item">
      <h1>Catagory</h1>
      <div className="cat">
      <input type="radio"    name="cat" value="መጽሐፍ ቅዱስ"  id="art" />
      <label htmlFor="art">መጽሐፍ ቅዱስ</label></div>
      <div className="cat">
      <input type="radio" name="cat"  value="ቤተ ክርስቲያን"  id="science" />
      <label htmlFor="science">ቤተ ክርስቲያን</label></div>
      <div className="cat">
      <input type="radio" name="cat"  value="መንፈሳዊ ትምህርት"  id="technology" />
      <label htmlFor="technology">መንፈሳዊ ትምህርት</label></div>
      <div className="cat">
      <input type="radio" name="cat"  value="ሥነ ጽሑፍ"  id="cinema" />
      <label htmlFor="cinema">ሥነ ጽሑፍ</label></div>
      <div className="cat">
      <input type="radio" name="cat"  value="ሥዕል"  id="design" />
      <label htmlFor="design">ሥዕል</label></div>
      <input style={{display:"none"}} type="file" id='file'  />
      <label className='file' htmlFor="file">Upload Image</label>
      <button class="btn btn-primary" type="button">Publish</button>
      
     </div>
     </div>
     </div>
     <br/><br/>
    </div>
  )
}

export default Write
