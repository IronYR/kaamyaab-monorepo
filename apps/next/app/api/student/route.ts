import db from "lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import Student from "models/student"
export const GET=async(req:NextRequest)=>{
    await db.dbConnect();
    const allstudents=await Student.find()
    return  NextResponse.json(allstudents, { status: 200 });

}

