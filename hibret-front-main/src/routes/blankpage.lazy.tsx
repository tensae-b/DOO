import { createLazyFileRoute, Link } from '@tanstack/react-router'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
export const Route = createLazyFileRoute('/blankpage')({
  component: () => <BlankPage />
})

function BlankPage(){
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];
   return(
    <div className='mb-12'>
<div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />

          <div className='mx-7'>
            <div className='flex justify-between'>
            <div className=" flex gap-4 items-center my-7 justify-center">
                <Link to="/document" >
                  <img src="asset/icons/back-arrow.svg" />
                </Link>

                <h2 className=" text-[#4A176D] text-3xl font-bold">
                Create New Document
                </h2>
              </div>
              <div className='flex gap-7 items-center'>
                <button className=" text-[#9EA9C1] border border-[#F0F3F6] px-6 py-4 rounded-md">Preview</button>
                <button className='bg-[#F0F3F6] text-[#9EA9C1] px-6 py-4 rounded-md'>Save Document</button>
              </div>
            </div>

            <div className='flex gap-4 items-center'>
              <p className='text-[#667085] text-lg'>Using</p>
              <button className=" text-[#667085] border border-[#F0F3F6] px-6 py-2 rounded-md text-sm">Load Application</button>
              <p className='text-[#667085] text-lg'>Template</p>
            </div>

            <div className='flex flex-col gap-7 mt-10'>
              <h2 className='text-[#00B0AD] text-xl font-bold'>Document Information</h2>
              <hr/>
              <div className='flex w-full gap-10 '>
                <div className='flex flex-col w-full gap-3'>
                  <h3 className='text-lg'>Document Name</h3>
                  <input type="text" name="documentName" className="text-[#D0D5DD] py-2 px-3 border border-[#D0D5DD] rounded-lg flex justify-between"/>
                </div>
                <div className='flex flex-col w-full gap-3'>
                  <h3 className='text-lg '>Document Type</h3>
                  <div  className="text-[#D0D5DD] py-2 px-3 border border-[#D0D5DD] rounded-lg flex justify-between">
                  <input type="text" name="template" placeholder="Template Type"/>
                  <img src="asset/icons/arrowDown.svg" />
                     </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-7 mt-10'>
            <h2 className='text-[#00B0AD] text-xl font-bold'>Document Content</h2>

            <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-lg'>Date*</h3>
            <input type="text" name="documentName" className="text-[#D0D5DD] py-2 px-3 border border-[#D0D5DD] rounded-lg flex justify-between"/>
            </div>
            <hr/>
            <div className='flex flex-col gap-4 w-full mb-8'>
            <h3 className='text-lg'>Some Section Header*</h3>
            <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="write your content ...."
           
            style={{ height: "220px" }}
          >
          </ReactQuill>
            </div>

            <div className='flex flex-col gap-4 w-full mb-10'>
            <h3 className='text-lg'>Additional Information*</h3>
            <input type="text" name="documentName" className="text-[#D0D5DD] py-2 px-3 border border-[#D0D5DD] rounded-lg flex justify-between"/>
            </div>
            </div>

          
          </div>
          </div>
          </div>
    </div>
   );
}