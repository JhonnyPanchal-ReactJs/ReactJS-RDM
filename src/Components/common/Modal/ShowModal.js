import React, { useState, useEffect, useRef, useCallback } from "react";
import { Table, Popconfirm, Button, Space, Form, Input, Modal } from "antd";

const ShowModal = ({ canShow, updateModalState,title,closemodal }) => {
    if (canShow) {
        return (
            <div >
                <Modal
                    title={title}
                    open={canShow}
                    footer={[
                        <Button key="back" onClick={closemodal} >
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={updateModalState}>
                            Submit
                        </Button>
                    ]}
                >
                    {/* <p>{modalText}</p> */}
                </Modal>
            </div>
        );
    }
    return null;
}

export default ShowModal

