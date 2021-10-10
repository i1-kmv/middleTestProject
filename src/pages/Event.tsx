import React, {FC, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
            <EventCalendar events={[]}/>
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm/>
            </Modal>
        </div>
    );
};

export default Event;