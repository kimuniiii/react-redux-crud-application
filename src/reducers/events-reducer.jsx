// 外部ライブラリからのimport
import _ from 'lodash';

// 画面固有のimport
import { READ_EVENTS } from '../actions/events-index'

const initialEvents = {}

const eventsReducer =  (events = initialEvents, { type, response }) => {
    switch (type) {

    case READ_EVENTS :
        const objIdKey = _.mapKeys(response.data, (value,key) => { return value.id })
        return {...events, ...objIdKey};

    default:
        return events
    }
}

export default eventsReducer;
