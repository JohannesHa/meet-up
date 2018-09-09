/**
 * Created by dominik on 09/09/18.
 */
import React from 'react';
import JoinedGroupsList from './JoinedGroupsList';

const JoinedGroupListContainer = ({onSelectGroup}) => {
  return <JoinedGroupsList groups={['Blockchain', 'Art', 'Running', 'Sport', 'Drinking']} onSelectGroup={onSelectGroup}/>
};

export default JoinedGroupListContainer;