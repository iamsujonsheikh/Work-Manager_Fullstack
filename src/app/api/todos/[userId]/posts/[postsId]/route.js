import { NextResponse } from "next/server"

export function GET(request, { params }) {
    console.log(params)
    return NextResponse.json(params)
}