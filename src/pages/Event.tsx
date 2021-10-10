import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/UseActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests, fetchEvents, createEvent} = useActions()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    useEffect( () => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <div>
            <EventCalendar events={events}/>
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
                <EventForm
                    quests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </div>
    );
};

export default Event;