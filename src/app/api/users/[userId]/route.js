import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
    console.log(params.userId)
    return NextResponse.json({ message: "delete" })
}