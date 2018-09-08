/**
 * Created by will on 08/09/18.
 */
export function hanldeAttendEvent(event: RegisterEvent): void {
    let eventId = event.params.id.toHex();
    let userId = event.params.userId.toHex();

    let user = new Entity();
    user.setString('id', userId);

    let eventEntity = store.get('Event', eventId);

    eventEntity.setU256('attendeeCount', event.params.attendeeCount);

    eventEntity.setBoolean('isFull', event.params.isFull);

    // Add user to list of userIds attending event
    // let eventAttendees = eventEntity.get('attendees').toArray();
    //
    // eventAttendees.push(Value.fromString(userId));
    // eventEntity.setArray('attendees', eventAttendees);

    store.set('User', userId, user);
    store.set('Event', eventId, eventEntity);
}

// export function handleLeaveEvent(event: LeaveEvent): void {
//     let eventId = event.params.eventId.toHex();
//     let userId = event.params.userId.toHex();
//
//     let eventEntity = new Entity();
//     eventEntity.setString('id', eventId);
//
//     event.setBigInt('attendeeCount', event.params.attendeeCount);
//
//     event.setBoolean('isFull', event.params.full);
//
//     // remove user from list of userIds attending event
//
//
//     store.set('Event', eventId, event);
//     store.set('User', userId, user);
// }