import {useState} from "react";

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormData(initialState);
    };
    const setForm = (formData)=>{
        setFormData(formData)
    }
    return {
        formData,
        handleChange,
        resetForm,
        setForm,
    };
};

export default useForm;