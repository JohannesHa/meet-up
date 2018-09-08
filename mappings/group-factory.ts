/**
 * Created by will on 08/09/18.
 */
export function handleCreateGroup(event: CreateGroup): void {
    let groupId = event.params.id.toHex();
    let userId = event.params.userId.toHex();


    let group = new Entity();
    group.setString('id', groupId);
    group.setString('admin', userId);
    group.setString('name', event.params.name);
    group.setString('description', event.params.description);
    group.setString('ens', event.params.ens);
    group.setString('category', event.params.category);
    // group.setBytes('logo', event.params.logo);
    group.setString('country', event.params.country);
    group.setString('region', event.params.region);
    // group.setBigInt('memberCount', event.params.memberCount);




    store.set('Group', groupId, group);
    // store.set('User', userId, user);

}

// export function handleDeleteGroup(event: GroupDeleted): void {
//     let groupId = event.params.id.toHex();
//     let userId = event.params.userId.toHex();
//
//     // Remove all events from group
//     // Remove group from users memberGroups and adminGroups
//     // is this automatic
//
//     store.remove('Group', groupId);
// }
