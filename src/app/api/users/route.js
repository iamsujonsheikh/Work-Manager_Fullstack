import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            name: "sujon",
            age: "22"
        },
        {
            name: "sheikh",
            age: "23"
        }
    ]
    return NextResponse.json(users);
};

export function POST() { }
export function PUT() { }
export function DELETE() {
    return NextResponse.json({ message: "delete" })
}