import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button,
    Form, 
    InputGroup,
    Modal,
} from 'react-bootstrap';
import { 
    Link45deg, 
    Trash3Fill,
} from 'react-bootstrap-icons';
import styles from './ArticleCreationForm.module.css';
import SaveModal from "../util/SaveModal";
import PublishModal from "../util/PublishModal";
import CancelModal from "../util/CancelModal";
import LogoutModal from "../util/LogoutModal";
import Header from "../util/Header";

const ArticleCreationForm = () => {

    const navigate = useNavigate();
    //Modal state
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showPublishModal, setShowPublishModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);  
    const [show, setShow] = useState(false);
    const [linkInput, setLinkInput] = useState('');
    const [links, setLinks] = useState([]);
    const [files, setFiles] = useState([]);
    const [hoveredFile, setHoveredFile] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddLink = () => {
        if (linkInput) {
            setLinks([...links, linkInput]);
            setLinkInput('');
        }
    };

    //Handle save
    const handleSave = () => {
        setShowSaveModal(false);
        navigate("/my-articles"); 
    };

    //Handle publish
    const handlePublish = () => {
        setShowPublishModal(false);
        navigate("/view-article"); 
    };

    //Handle cancel
    const handleCancel = () => {
        setShowCancelModal(false);
        navigate(-1); 
    };

    //Handle logout
    const handleLogout = () => {
        setShowLogoutModal(false);
        navigate("/logout"); 
    };
    
    return (
        <>
            {/* Article Creation Form Page */}
            <div className={styles.main}>
                {/* Navbar */}
                <Header back={true} login={true}/>
                {/* Body / Form */}
                <div className={styles.body}>
                    <div className={styles.title}>ARTICLE CREATION FORM</div>                  
                    <Form className={styles.form1}>
                        <div className={styles.leftCol}>
                            <Form.Group className={styles.formGroup1} controlId="formTitle">
                                <Form.Label className={styles.formLabel1}>Title:</Form.Label>
                                <Form.Control className={styles.textbox1}/>
                            </Form.Group>
                            <Form.Group className={styles.formGroup1} controlId="formTag">
                                <Form.Label className={styles.formLabel1}>Tag:</Form.Label>
                                <Form.Control className={styles.textbox1}/>
                            </Form.Group>
                            <Form.Group className={styles.formGroup1} controlId="formCategory">
                                <Form.Label className={styles.formLabel1}>Category:</Form.Label>
                                <Form.Select className={styles.textbox1}>
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={styles.formGroup2} controlId="formContent">
                                <Form.Label className={styles.formLabel1}>Content:</Form.Label>
                                <Form.Control className={styles.textbox2}/>
                            </Form.Group>
                        </div>
                        <div className={styles.rightCol}>
                            <Form.Group className={styles.formGroup3} controlId="formAttachments">
                                <Form.Label className={styles.formLabel2} for="inputGroupFile01">Attachments:</Form.Label>
                                <Form.Control 
                                    type="file" 
                                    className={styles.formFileUpld} 
                                    id="inputGroupFile01" 
                                    multiple 
                                    onChange={(e) => {
                                        const newFiles = Array.from(e.target.files).map(file => ({
                                            name: file.name,
                                            size: file.size, 
                                        }));
                                        setFiles(prevFiles => [...prevFiles, ...newFiles]);
                                        console.log(newFiles);
                                    }} 
                                />
                            </Form.Group>
                            <Form.Group className={styles.formGroup3} controlId="formLinks">
                                <Form.Label className={styles.formLabel2}>Links:</Form.Label>
                                <InputGroup className={styles.linkInputContainer}>
                                    <Form.Control 
                                        id="basic-url"
                                        aria-describedby="basic-addon3" 
                                        type="text" 
                                        value={linkInput} 
                                        onChange={(e) => setLinkInput(e.target.value)} 
                                        placeholder="Enter link here" 
                                        className={styles.formFileUpld}
                                    />
                                    <Button className={styles.formButtons} onClick={handleAddLink}>
                                        <Link45deg className={styles.formIcons}/>
                                    </Button>                                    
                                </InputGroup>                             
                            </Form.Group>
                            <ul className={styles['scrollable-list']}>
                                {files.map((file, index) => (
                                    <li key={index}
                                        onMouseEnter={() => setHoveredFile({ 
                                            name: file.name, 
                                            details: `Size: ${(file.size / 1024).toFixed(2)} KB` 
                                        })}
                                        onMouseLeave={() => setHoveredFile(null)}
                                    >
                                        {file.name}
                                        <Button variant="link" onClick={() => {
                                           setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
                                        }}>
                                            <Trash3Fill fill = " #797A7A"/> 
                                        </Button>
                                        {hoveredFile && hoveredFile.name === file.name && (
                                            <div className={styles.tooltip}>
                                                {hoveredFile.details} {/* Display the actual file details */}
                                            </div>
                                        )}
                                    </li>
                                ))}
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                        <Button variant="link" onClick={() => {
                                            setLinks(prevLinks => prevLinks.filter((_, i) => i !== index));
                                        }}>
                                            <Trash3Fill fill = " #797A7A" /> 
                                        </Button>
                                    </li>
                                ))}                                
                            </ul>
                        </div>
                    </Form>
                </div>
                {/* Footer / Controls */}
                <div className={styles.controls}>
                    <button className={styles.buttons}>Clear</button>
                    <button className={styles.buttons} onClick={() => setShowSaveModal(true)}>Save & Exit</button>
                    <button className={styles.buttons} onClick={() => setShowCancelModal(true)}>Cancel</button>
                    <button className={styles.buttons} onClick={handleShow}>Preview</button>
                    <button className={styles.buttons} onClick={() => setShowPublishModal(true)}>Publish</button>
                </div>
            </div>

            {/* Article Preview Modal */}
            <Modal 
                show={show} 
                onHide={handleClose}                
                backdrop="static"
                keyboard={false}
                dialogClassName={styles.modalMain}
                contentClassName={styles.modalContent}
                scrollable='true'
                centered
            >
                <Modal.Header className={styles.modalHeader}>
                    <Modal.Title className={styles.modalTitle}>HOW TO MAKE COFFEE......</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <article>
                        <p className={styles.line1}>Coffee is more than just a drink—it's a ritual, a source of energy, and for many, a daily necessity. While there are many ways to prepare coffee, making a great cup at home is simple with the right ingredients and techniques. Whether you prefer a strong espresso, a smooth pour-over, or a creamy latte, this guide will help you brew the perfect cup.</p>
                        <p className={styles.line1}>Choosing the Right Coffee Beans</p>
                        <p className={styles.line1}>The quality of your coffee starts with the beans. There are two main types of coffee beans:</p>
                        <ul>
                            <li>Arabica: Smooth, slightly sweet, and less bitter.</li>
                            <li>Robusta: Stronger, more bitter, and higher in caffeine.</li>
                        </ul>
                        <p className={styles.line1}>Freshness matters! Always buy whole beans and grind them just before brewing for the best flavor. If possible, choose freshly roasted beans from a local coffee roaster or a reputable brand.</p>
                        <p>Selecting a Brewing Method</p>                        
                        <p className={styles.line1}>The brewing method you choose affects the flavor, strength, and texture of your coffee. Here are some popular methods:</p>
                        <ul className={styles.line1}>
                            <li>Drip Coffee Maker: Convenient and easy to use, great for making multiple cups.</li>
                            <li>French Press: Produces a rich, full-bodied coffee by steeping coarse grounds in hot water.</li>
                            <li>Espresso Machine: Makes strong, concentrated coffee, used for lattes, cappuccinos, and macchiatos.</li>
                            <li>Pour-Over (e.g., V60, Chemex): Provides a clean and flavorful cup by manually pouring hot water over coffee grounds.</li>
                            <li>Cold Brew: Steeps coffee grounds in cold water for 12-24 hours, resulting in a smooth, less acidic drink.</li>
                        </ul>
                        <p className={styles.line1}>Each method requires a different grind size, so be sure to adjust accordingly. For example, espresso needs a fine grind, while a French press requires a coarse grind.</p>
                        <p>Measuring Coffee and Water</p>
                    </article>
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter}>
                    <Button className={styles.modalButtons} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className={styles.modalButtons} onClick={() => setShowPublishModal(true)}>
                        Publish
                    </Button>
                </Modal.Footer>
            </Modal>
            <SaveModal
                show={showSaveModal}
                onClose={() => setShowSaveModal(false)}
                onSave={handleSave}
            />
            <PublishModal
                show={showPublishModal}
                onClose={() => setShowPublishModal(false)}
                onPublish={handlePublish}
            />
            <CancelModal
                show={showCancelModal}
                onClose={() => setShowCancelModal(false)}
                onCancel={handleCancel}
            />
            <LogoutModal
                show={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onLogout={handleLogout}
            />
        </>
    );
}
export default ArticleCreationForm;