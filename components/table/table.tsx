import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";
import NextLink from "next/link";
{
  /* <TablePagination
shadow
noMargin
align="center"
rowsPerPage={8}
onPageChange={(page) => console.log({ page })}
/> */
}
export const TableWrapper = () => {
  return (
    <div className="max-w-[90rem] mx-auto w-full flex flex-col gap-4">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Users</h3>
        <Link href="/accounts" as={NextLink} color="primary">
          View All
        </Link>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ user: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
