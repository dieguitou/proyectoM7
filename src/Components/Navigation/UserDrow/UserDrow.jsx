import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/form/formSlice';
import ModalInfo from '../../Modals/ModalInfo';


const resetForm = {
    module:'',
    username:'',
    email:'',
    password:''
}

const UserDrow = ()=>{

    const [isConfirme, setIsconfirme] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const confirmed = ()=>setIsconfirme(!isConfirme)
    const handleModal = ()=>setShowModal(!showModal)
    const store = useSelector((state) => state.formLogin);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isConfirme){
            dispatch(addUser(resetForm))
            handleModal()
            confirmed()
        }
    },[isConfirme])

    return(
        <div>
            {store.username && (<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><h5>Biemvenido {store.username} | {store.email}</h5> 
             <button style={{backgroundColor:'#009e03ec', color:'#fff', padding:'8px' , marginLeft:'15px'}} onClick={handleModal}>salir</button></div>)}
            <ModalInfo
            visible={showModal}
            message="¿Quieres cerrar sesion?"
            onClose={handleModal}
            status='warning'
            confirmed={confirmed}
            />
        </div>
    )
}

export default UserDrow