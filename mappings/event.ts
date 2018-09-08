/**
 * Created by will on 08/09/18.
 */
export function hanldeAttendEvent(event: AttendEvent): void {
    let eventId = event.params.eventId.toHex();
    let userId = event.params.userId.toHex();

    let eventEntity = new Entity();
    eventEntity.setString('id', eventId);

    eventEntity.setBigInt('attendeeCount', event.params.attendeeCount);

    eventEntity.setBoolean('isFull', event.params.full);

    // Add user to list of userIds attending event
    eventEntity.setArray('attendees', [Value.fromString(userId)]);


    store.set('Event', eventId, event);
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