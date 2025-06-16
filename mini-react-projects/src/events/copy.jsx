import { useState } from "react"

const Copy = () => {
    const [copy, setCopy] = useState('')
    const handleCopy = () => {
        try {
            const text = window.getSelection().toString()
            setCopy(`You Copied ${text}`)
        } catch (error) {
                console.log(error)
                setCopy('Could not read the copied text')
        }
    }
    return(
        <div style={{marginTop: '100px'}}>
            <h2 onCopy={handleCopy}>PLease Copy Me</h2>
                <h4>Or Try me</h4>
                <h5 style={{fontWeight: 'bolder'}}>{copy}</h5>
        </div>
    )
}

export default Copy