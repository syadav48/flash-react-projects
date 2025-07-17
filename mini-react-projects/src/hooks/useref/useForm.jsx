import { useState } from "react";

export function useForm(initialValue){
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value })
    }
    return [formData, handleChange]
}

