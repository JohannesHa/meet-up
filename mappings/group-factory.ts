/**
 * Created by will on 08/09/18.
 */
export function handleCreateGroup(event: GroupCreated): void {
    let groupId = event.params.id.toHex();
    let userId = event.params.userId.toHex();

    // How should this work?
    // location will be encoded as 2 fields currently - no id
    // Is there any point having it separate entity
    let location = new Entity();

    let group = new Entity();
    group.setString('id', groupId);
    group.setString('admin', userId);
    group.setString('name', event.params.name);
    group.setString('description', event.params.description);
    group.setString('ens', event.params.ens);
    group.setString('category', event.params.category);
    group.setString('logo', event.params.logo);



    let user = new Entity();
    user.setString('id', userId);

    // Add group id to list of adminGroupIds
    user.setString('groupId', groupId);



    store.set('Group', groupId, group);
    store.set('User', userId, user);

}

export function handleDeleteGroup(event: GroupDeleted): void {
    let groupId = event.params.id.toHex();
    let userId = event.params.userId.toHex();

    // Remove all events from group
    // Remove group from users memberGroups and adminGroups
    // is this automatic

    store.remove('Group', groupId);
}
