import { motion } from "motion/react"

const ModalInfo = ({ visible, message, onClose, status, confirmed, }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className={status}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                    {confirmed&&<input type="submit" value="presione para salir!!!" onClick={confirmed}/>}
                </div>
                <button
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;