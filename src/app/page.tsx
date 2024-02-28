"use client"

export default function Home() {
  const { setTheme } = useTheme()
  const [query, setQuery] = useState([]);

  const fetchData = async () => {
    const { data: query } = await supabase
    .from('bingo_values')
    .select('*').limit(1)
    setQuery(query);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <main className="flex flex-col h-screen p-4">
      <NavigationMenu className="flex justify-end max-h-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenu>

      <div className="flex flex-col justify-center items-center">
        <h1 className="flex text-bold text-9xl">Retard Bingo</h1>
        <div className="flex grid justify-between pt-4">
          <div>
          {query.map((query)  => (
              <Button key={query.id}>{query.query}</Button>
            ))}
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          </div>
          <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          </div>
          <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          </div>
          <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          </div>
          <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          </div>
        </div>
      </div>
    </main>
  );

}


import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useEffect, useState } from 'react';
import { supabase } from "@/lib/utils/supabase";