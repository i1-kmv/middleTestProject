import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";


export interface EventState {
    quests: IUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_EVENTS = "SET_EVENTS",
    SET_GUESTS = "SET_GUESTS"
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[]
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[]
}

export type EventAction =
    SetEventsAction |
    SetGuestsAction