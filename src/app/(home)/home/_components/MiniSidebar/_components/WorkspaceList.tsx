"use client"
import React from 'react'
import { useGetWorkspaces } from '@/api/workspace.query'
import WorkspaceItem from './WorkspaceItem';

function WorkspaceList() {
    const { data } = useGetWorkspaces();
  return (
    <div>
        {data?.map((workspace: any) => (
            <WorkspaceItem key={workspace.id} workspace={workspace} />
        ))}
    </div>
  )
}

export default WorkspaceList