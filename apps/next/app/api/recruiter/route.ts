import db from "lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import Recruiter from "models/recruiter"
export const GET=async(req:NextRequest)=>{
    await db.dbConnect();
    const allrecruiters=await Recruiter.find()
    return  NextResponse.json(allrecruiters, { status: 200 });

}

