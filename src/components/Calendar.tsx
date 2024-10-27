"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function CalendarPicker() {
    const [date, setDate] = React.useState<Date>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"bgnone"}
                    className={cn(
                        "  underline-none hover:bg-none hover:outline-none bg-transparent text-white  font-normal w-full  ",
                        !date && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4 text-white" />
                    {date ? format(date, "PPP") : <span className="text-white">Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-primary-bg border  rounded-xl rounded-b-2xl">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
        </Popover>
    );
}

export default CalendarPicker;
