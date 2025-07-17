import { useForm } from "./useForm";

export function Myform(){
    const [formData, handleChange] = useForm({name: '', email: ''})
    return (
        <input name="name" value={formData.name} onChange={handleChange}/>
    )
}