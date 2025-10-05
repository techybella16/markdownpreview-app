import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Dashboard() {
  const [text, setText] = useState(`# Welcome to the Markdown Editor!

This is a **live preview** of your Markdown.

- Edit Markdown on the left
- See preview on the right
- Mobile friendly ✨
`);
const [saveFile, setSaveFile] = useState("Save File");

  const fileInputRef = useRef(null);



  // Save to file
  const handleSaveFile = async () => {
    try {
      const blob = new Blob([text], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.md";
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Markdown saved as document.md");
    } catch (error) {
      toast.error("Failed to save file");
    }
  };

  const handleFetchExample = async () => {
    try {
      setSaveFile("Processing...");
      const options = {
        method: 'POST',
        url: 'https://api.oluwasetemi.dev/tasks',
        headers: { 'Content-Type': 'application/json' },
        data: {
          name: text,
          description: null,
          start: null,
          end: null,
          duration: null,
          priority: 'LOW',
          status: 'TODO',
          archived: true,
          isDefault: null,
          parentId: null,
          children: '',
          owner: null,
          tags: null,
          completedAt: null
        }
      };
      const response = await axios.post(options.url, JSON.stringify(options.data), { headers: options.headers });
      //console.log("response>>", { response, taskid: response?.data?.id });

      if (response) {
        setText(response.name);
        sessionStorage.setItem('taskId', response?.data?.id);
        await handleSaveFile();
        setSaveFile("Save File");
        toast.success("Successfully saved markdown to API");
        setTimeout(() => window.location.reload(), 3000);
      }
    } catch (error) {
      toast.error("Failed to fetch example Markdown");
      console.error("Error fetching example Markdown:", error);
    }
  }

  async function handleFetchData() {
    try {
      setText("")
      const getTaskId = sessionStorage.getItem('taskId') ?? "";
      if (getTaskId) {
        const response = await axios.get(`https://api.oluwasetemi.dev/tasks/${getTaskId}`);
        console.log("fetch task from API response>>",response);
        if (response) {
          setText(response?.data?.name);
          toast.success("Fetched markdown from previous session");
        }
      }

    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch previous markdown");
    }
  }

  useEffect(() => {
    handleFetchData();
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Editor Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Editor
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handleFetchExample}
                className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
              >
                {saveFile}
              </button>
    
            </div>
          </div>

          <div className="flex-1 min-h-[400px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <CodeMirror
              value={text}
              height="100%"
              theme={oneDark}
              extensions={[markdown()]}
              onChange={(value) => setText(value)}
            />
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Preview
          </h2>
          <div className="prose max-w-none dark:prose-invert">
            <ReactMarkdown
              children={text}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
