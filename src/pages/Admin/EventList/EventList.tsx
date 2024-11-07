import { useEffect, useState } from "react";
import EventService from "@/services/EventService";

import EventInterface from "@/types/EventInterface";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
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
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Lista de usuários</BreadcrumbLink>
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
