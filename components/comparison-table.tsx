"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

interface Specs {
  ram: string;
  storage: string;
  processor: string;
  camera: string;
  display: string;
  battery: string;
  os: string;
}

export function ComparisonTable({ specs }: { specs: Specs }) {
  return (
    <Table>
      <TableBody>
        {Object.entries(specs).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="font-medium capitalize">{key}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}