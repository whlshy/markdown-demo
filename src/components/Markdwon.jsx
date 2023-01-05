import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import 'react-markdown-editor-lite/lib/index.css'
import MdEditorLite from 'react-markdown-editor-lite'

export default function Markdwon(props) {
	const { value, onChange } = props

	return (
		<MdEditorLite
			value={value}
			style={{ height: "900px" }}
			onChange={({ html, text }, event) => onChange(text)}
			htmlClass={"wmde-markdown wmde-markdown-color"}
			renderHTML={text =>
				<MDEditor.Markdown
					className='category_md_container'
					source={text}
					linkTarget="_blank"
				/>
			}
		/>
	)
}
