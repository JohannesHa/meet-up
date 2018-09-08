/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import Group from './Group';

const GroupContainer = () => {
  return <Group
    name="Berlin Blockchain"
    memberCount="100"
    country="Germany"
    region="Berlin"
    category="Blockchain"
    isAdmin={true}
    isMember={true}
  />
}