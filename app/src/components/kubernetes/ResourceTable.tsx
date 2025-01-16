import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from 'lucide-react'

interface ResourceTableProps {
  resources: any[]
  columns: { key: string; header: string }[]
  onEdit: (resource: any) => void
  onDelete: (resource: any) => void
}

export default function ResourceTable({ resources, columns, onEdit, onDelete }: ResourceTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.header}</TableHead>
          ))}
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.metadata.uid}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.key.split('.').reduce((obj, key) => obj && obj[key], resource)}
              </TableCell>
            ))}
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => onEdit(resource)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onDelete(resource)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

