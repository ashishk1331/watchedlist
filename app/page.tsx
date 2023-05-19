"use client"

import Avvvatars from "avvvatars-react";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Post from '@/components/dev/Post'
import { useState } from 'react'

export default function Home() {

    const [ data, setData] = useState([
        {
            "id": "tt5433138",
            "resultType": "Title",
            "image": "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6757_AL_.jpg",
            "title": "F9: The Fast Saga",
            "description": "2021 Vin Diesel, Michelle Rodriguez"
        },
        {
            "id": "tt1013752",
            "resultType": "Title",
            "image": "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6757_AL_.jpg",
            "title": "Fast & Furious",
            "description": "2009 Vin Diesel, Paul Walker"
        },
        {
            "id": "tt0232500",
            "resultType": "Title",
            "image": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6757_AL_.jpg",
            "title": "The Fast and the Furious",
            "description": "2001 Vin Diesel, Paul Walker"
        },
        {
            "id": "tt2820852",
            "resultType": "Title",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_Ratio0.6757_AL_.jpg",
            "title": "Furious 7",
            "description": "2015 Vin Diesel, Paul Walker"
        },
        {
            "id": "tt4630562",
            "resultType": "Title",
            "image": "https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_Ratio0.6757_AL_.jpg",
            "title": "The Fate of the Furious",
            "description": "2017 Vin Diesel, Jason Statham"
        },
        {
            "id": "nm2823014",
            "resultType": "Name",
            "image": "https://m.media-amazon.com/images/M/MV5BY2I2YzI4NTYtODliOC00NTZkLTk5ZmYtNjcwYjEyZDNhMjFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
            "title": "Andriana Parisi",
            "description": "Producer, American Games"
        },
        {
            "id": "nm3356566",
            "resultType": "Name",
            "image": "",
            "title": "Roy Bemelmans",
            "description": "Composer, Troubled Child (2012)"
        }
    ])

    return (
        <main className="flex min-h-screen flex-col items-center gap-12 bg-primary">
            <div className="w-full bg-sunset pb-32 pt-12 px-24 flex items-center justify-between">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Watched List
                </h1>
                <div className="flex items-center gap-4">
                    <Button className="text-primary font-bold text-sunset">
                        <Plus className="mr-2 h-4 w-4" /> Add
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="border-3 rounded-full border-primary">
                                <Avvvatars
                                    value="Ayush Dixit"
                                    style="shape"
                                    size={42}
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mr-24 mt-2 bg-primary text-primary-foreground border-none">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuLabel className="flex items-center gap-1 font-normal">
                                <User className="mr-2 h-4 w-4" />
                                <span>Ashish Khare</span>
                            </DropdownMenuLabel>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <ul className="w-full py-12 px-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {
                   data.map(movie => <Post key={movie.id} data={...movie} />)
                }
            </ul>
        </main>
    );
}
