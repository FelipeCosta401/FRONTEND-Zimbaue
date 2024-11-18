import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserService from "@/services/UserService";

import { DataTable } from "./data-table";
import { UserInterface } from "@/types/UserInterface";
import { columns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const userService = new UserService();

const UserList = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    async function fetchUserList() {
      try {
        const response = await userService.loadUserList();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserList();
  }, []);

  return (
    <div className="space-y-4">
      <Breadcrumb className="font-bold">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/FRONTEND-Zimbaue/admin">Admin</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="" />
          <BreadcrumbItem>
            <Link to="#">Lista de eventos</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Lista de usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserList;
