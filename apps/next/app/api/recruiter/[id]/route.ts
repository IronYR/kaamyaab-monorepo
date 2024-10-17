import db from "lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import Recruiter from "models/recruiter"
import jwt from "jsonwebtoken";
import validateTokenHandler from "middleware/validateTokenHandler";
import { CustomRequest } from 'lib/definitions';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    
    try {
      await db.dbConnect();
      const { id } = params;
      const recruiter = await Recruiter.findById(id);
  
      if (!recruiter) {
        return NextResponse.json({ msg: "Recruiter not found" }, { status: 404 });
      }
  
      return NextResponse.json(recruiter, { status: 200 });
    } catch (error) {
      console.error("Error fetching recruiter:", error);
      return NextResponse.json({ msg: "Internal Server Error Dumbo" }, { status: 500 });
    }
  }
  
  export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    // Validate JWT token
    const validationResponse = await validateTokenHandler(req);
    if (validationResponse) return validationResponse;
    const { id } = params;
    
    if( (req as CustomRequest)?.user?.id!==id){
      return NextResponse.json({ msg: "Not Authorized" }, { status: 401});
    }

    
    try {
      await db.dbConnect();
      const body = await req.json();
  
      const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedRecruiter) {
        return NextResponse.json({ msg: "Recruiter not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedRecruiter, { status: 200 });
    } catch (error) {
      console.error("Error updating recruiter:", error);
      return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
  }
  
  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    // Validate JWT token
    const validationResponse = await validateTokenHandler(req);
    if (validationResponse) return validationResponse;

    const { id } = params;
    
    if( (req as CustomRequest)?.user?.id!==id){
      return NextResponse.json({ msg: "Not Authorized" }, { status: 401});
    }
  
    try {
      await db.dbConnect();
      
      const deletedRecruiter = await Recruiter.findByIdAndDelete(id);
  
      if (!deletedRecruiter) {
        return NextResponse.json({ msg: "Recruiter not found" }, { status: 404 });
      }
  
      return NextResponse.json({ msg: "Recruiter deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting recruiter:", error);
      return NextResponse.json({ msg: "Internal Server Error Doofus" }, { status: 500 });
    }
  }
  
