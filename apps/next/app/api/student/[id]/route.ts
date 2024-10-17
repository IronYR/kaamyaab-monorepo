import db from "lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import Student from "models/student"
import validateTokenHandler from "middleware/validateTokenHandler";
import { CustomRequest } from 'lib/definitions';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    
    try {
      await db.dbConnect();
      const { id } = params;
      const student = await Student.findById(id);
  
      if (!student) {
        return NextResponse.json({ msg: "Student not found" }, { status: 404 });
      }
  
      return NextResponse.json(student, { status: 200 });
    } catch (error) {
      console.error("Error fetching student:", error);
      return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
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
  
      const updatedStudent = await Student.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedStudent) {
        return NextResponse.json({ msg: "Student not found" }, { status: 404 });
      }
  
      return NextResponse.json(updatedStudent, { status: 200 });
    } catch (error) {
      console.error("Error updating student:", error);
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
      
      const deletedStudent = await Student.findByIdAndDelete(id);
  
      if (!deletedStudent) {
        return NextResponse.json({ msg: "Student not found" }, { status: 404 });
      }
  
      return NextResponse.json({ msg: "Student deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting student:", error);
      return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
  }
  
