/**
 * Created by will on 08/09/18.
 */
export function handleJoinGroup(event: JoinGroup): void {
    let groupId = event.params.id.toHex();
    let userId = event.params.userId.toHex();

    let group = new Entity();
    group.setString('id', groupId);

    // add user to list of users that are members

    group.setArray('members', [Value.fromString(userId)])

    group.setBigInt('memberCount', event.params.memberCount);

    // let user = new Entity();
    // user.setString('id', userId);

    // add group to list of groups user attends

    store.set('Group', groupId, group);
    store.set('User', userId, user);

}

export function handlLeaveGroup(event: LeaveGroup): void {
    let groupId = event.params.id.toHex();
    let userId = event.params.userId.toHex();

    let group = new Entity();
    group.setString('id', groupId);

    // remove user from list of users that are members

    // add user to
    group.setBigInt('memberCount', event.params.memberCount);

    let user = new Entity();
    user.setString('id', userId);

    // remove group from list of groups user attends

    store.set('Group', groupId, group);
    store.set('User', userId, user);
}

export function handleCreateEvent(event: CreateEvent): void {
    let eventId = event.params.eventId.toHex();
    let groupId = event.params.groupId.toHex();
    let userId = event.params.userId.toHex();

    let eventEntity = new Entity();
    eventEntity.setString('id', eventId);
    eventEntity.setString('group', groupId);
    eventEntity.setString('creator', userId);
    eventEntity.setString('name', event.params.name);
    eventEntity.setString('description', event.params.description);
    // What should time be
    eventEntity.setString('date', event.params.data);

    // eventEntity.setAddress('contract', event.params.eventId as Address)

    // should I be setting the address of the creator USER?
    // event.setAddress()

    let group = new Entity();
    group.setString('id', groupId);

    // add eventId to array of groupEvents

    let user = new Entity();
    user.setString('id', userId);
    // add event to list of createdEvents? Not sure if I need this

    // do I need to update the

    store.set('Event', eventId, eventEntity)
}

export function handleDeleteEvent(event: DeleteEvent): void {
    let eventId = event.params.eventId.toHex();
    let groupId = event.params.groupId.toHex();


    // Remove Event from GroupEvents and User - UpcomingEvents and OrganisedEvents
    // is this automatic

    store.remove('Event', eventId)
}