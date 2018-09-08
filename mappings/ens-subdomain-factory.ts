/**
 * Created by will on 08/09/18.
 */
export function handleAddSubdomain(event: SubdomainCreated): void {

    let groupId = event.params.target.toHex();

    let group = new Entity();
    group.setString('id', groupId);
    group.setString('ens', event.params.subdomain);

    store.set('Group', groupId, group);
}