"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CardStats from "@/components/dashboard/cards-stats";
import ResponsiveModalSide from "@/components/dashboard/create-assignment";
import AssignmentFolders from "@/components/dashboard/folder-card";
import { Breadcrumb, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function TugasPage() {
  return (
    <div className="flex h-screen flex-col ">
      <header className="flex shrink-0 items-center gap-2 h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/assignment" className="text-base">Assignment</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4 w-full mt-8 overflow-y-scroll">
        <section>
          <CardStats cardData={[]} />
        </section>
        <Separator />
        <section className="flex items-center gap-4">
          <ResponsiveModalSide />
          <Button variant="outline" className="rounded-lg">
            Sort
          </Button>
        </section>
        <section>
          <AssignmentFolders />
        </section>
      </main>
    </div>
  );
}

