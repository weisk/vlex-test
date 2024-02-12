import React, { useState, useEffect } from 'react';
import {
  Typography,
  Spin,
  Tree,
} from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';

import {
  fetchJurisdictions,
  fetchJurisdiction,
  fetchSubJurisdictions,
} from '../../api/fakeJurisdictionsApi';

import type {
  SubJurisdiction,
  Jurisdiction,
  Jurisdictions,
  FetchJurisdictions,
  FetchJurisdiction,
  FetchSubJurisdictions
} from '../../api/types.ts';

import './styles.css';

const { Text } = Typography;

interface TreeNode {
  key: string;
  title: string;
  children: Array<any>;
}

const JurisdictionSelector: React.FC = () => {
  const [jurisdictions, setJurisdictions] = useState([] as Jurisdictions);

  async function convertToTree(jurisdictions: Jurisdictions): TreeDataNode[] {
    const treeData: TreeDataNode[] = jurisdictions.map((j) => ({
      key: j.id,
      title: j.name,
      children: []
    }));
    return treeData;
  }

  async function expandTree(jurisdictions: TreeDataNode[], jurisdictionId?: number | string): TreeDataNode[] {
    const subJurisdictions = await fetchSubJurisdictions(jurisdictionId);
    return jurisdictions.map((node: TreeDataNode) => {
      if (node.key !== jurisdictionId) {
        return node;
      }
      return {
        ...node,
        children: subJurisdictions.map((s) => ({
          key: s.id,
          title: s.name,
          children: []
        }))
      };

    });

  }

  useEffect(() => {
    async function initialFetch() {
      const jurisdictions = await fetchJurisdictions();
      const treeData = await convertToTree(jurisdictions);
      setJurisdictions(treeData);
    }
    initialFetch();
  }, []);

  const onCheck: TreeProps['onCheck'] = async (checkedKeys, { node }) => {
    const treeData = await expandTree(jurisdictions, node.key);
    setJurisdictions(treeData);
  };

  return (
    <div className="JurisdictionSelector">
      { jurisdictions.length === 0 ?
        <Spin /> :
        <Tree
          checkable
          checkStrictly
          defaultExpandAll
          onCheck={onCheck}
          treeData={jurisdictions}
        />
      }
    </div>
  );
};

export default JurisdictionSelector;
