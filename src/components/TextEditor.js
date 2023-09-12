import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

function TextEditor({setDescription}) {
    const [editorHtml, setEditorHtml] = useState('');
    console.log(editorHtml)

    const handleEditorChange = (content) => {
        setEditorHtml(content);
        setDescription(content)
    };

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
        ],
    };

    const formats = [
        'header',
        'list',
        'bold',
        'italic',
        'underline',
        'link',
        'image',
        'align',
    ];


    const editorStyle = {
        backgroundColor: '#cff8fd',
        fontSize: '16px',
        borderRadius: '10px',
        border: "1px solid #e5e7eb"
    };

    return (
        <>
            <ReactQuill
                value={editorHtml}
                onChange={handleEditorChange}
                modules={modules}
                formats={formats}
                placeholder="Enter text"
                style={editorStyle}
                id="input1"
            />

            <style>
                {
                    `
                    .ql-container.ql-snow{
                        border: none;
                        opacity:0.4;
                    }
                    .ql-toolbar.ql-snow{
                        border: none;
                    }
                    `
                }
            </style>
        </>
    );
}

export default TextEditor;
