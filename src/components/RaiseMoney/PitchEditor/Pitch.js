import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/plugins/fullscreen.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import { useDispatch } from "react-redux";
import { updatePitchData } from "../../../redux/slice/pitchDataSlice";

export default function Pitch() {
  const [model, setModel] = useState("");
  const [pitchData, setPitchData] = useState({});
  const dispatch = useDispatch({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPitchData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        ...{ [name]: value },
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "pitch",
        data: {
          textData: {
            ...pitchData.textData,
            ...{ [name]: value },
          },
        },
      })
    );
  };

  const handlePitchChange = (e) => {
    setPitchData((prevState) => ({
      ...prevState,
      textData: {
        ...prevState.textData,
        htmldata: model,
      },
    }));

    dispatch(
      updatePitchData({
        pitchName: "pitch",
        data: {
          textData: {
            ...pitchData.textData,
          },
        },
      })
    );
  };

  return (
    <div className=" flex flex-col items-start mb-[15rem] z-50">
      <div className=" text-left w-1/2 ml-[2.5rem] mb-[0.2rem]">
        <p className="text-[1.6rem] font-[600] text-gray-900">Pitch</p>
        <p className=" w-[95%] text-[0.9rem] font-[500] text-blue-gray-500 py-1 mt-1">
          Get investors excited about your story, growth, team, and vision. Why
          should they invest? Read through our
          <a
            className=" text-light-blue-700 hover:text-blue-gray-600"
            href="https://guides.wefunder.com/pre-launch/how-to-curate-your-highlights"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            tips and examples.
          </a>
        </p>
        <input
          className="px-0 py-[0.1rem] w-[100%] h-[3.7rem] text-[1.8rem] font-[600] focus:ring-0 border-0 tracking-wide mb-3 placeholder:text-[#b4b6b8]"
          placeholder="Pitch Title here..."
          type="text"
          name="pitch_title"
          onChange={handleChange}
        />
      </div>

      <div className="w-[63%] ml-[2.5rem] mb-[0.2rem]" id="editor">
        <FroalaEditor
          tag="textarea"
          model={model}
          onModelChange={(e) => {
            setModel(e);
            handlePitchChange(e);
          }}
          config={{
            placeholderText: "Tell your story here...",
          }}
        />
      </div>
    </div>
  );
}
