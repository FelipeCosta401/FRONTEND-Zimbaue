import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EventService from "@/services/EventService";
import EventInterface from "@/types/EventInterface";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const eventService = new EventService();

const EventList = () => {
  const [events, setEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    async function fetchUserList() {
      try {
        const response = await eventService.loadAllEvents();
        setEvents(response);
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
            <Link to="#">Lista de usuários</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Lista de usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={events} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EventList;
